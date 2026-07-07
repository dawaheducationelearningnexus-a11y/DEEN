"use strict";

/* ==========================================================
   DEEN WEBSITE
   NAVIGATION MODULE
   Version 2.0
========================================================== */

window.DEEN = window.DEEN || {};

DEEN.navigation = {

    init() {

        this.cache();

        this.bindEvents();

        this.setActiveMenu();

        this.handleScroll();

    },

    /* ======================================================
       CACHE ELEMENTS
    ====================================================== */

    cache() {

        this.header =
            DEEN.helper.$(
                DEEN.constants.SELECTOR.header
            );

        this.menuToggle =
            DEEN.helper.$(
                DEEN.constants.SELECTOR.menuToggle
            );

        this.mobileMenu =
            DEEN.helper.$(
                DEEN.constants.SELECTOR.mobileMenu
            );

        this.overlay =
            DEEN.helper.$(
                DEEN.constants.SELECTOR.menuOverlay
            );

        this.navLinks =
            DEEN.helper.$$(
                DEEN.constants.SELECTOR.navLinks
            );

    },

    /* ======================================================
       EVENTS
    ====================================================== */

    bindEvents() {

        if (this.menuToggle) {

            DEEN.helper.on(

                this.menuToggle,

                "click",

                () => this.toggleMenu()

            );

        }

        if (this.overlay) {

            DEEN.helper.on(

                this.overlay,

                "click",

                () => this.closeMenu()

            );

        }

        window.addEventListener(

            "resize",

            () => {

                if (

                    window.innerWidth >

                    DEEN.config.mobileWidth

                ) {

                    this.closeMenu();

                }

            }

        );

        document.addEventListener(

            "keydown",

            e => {

                if (e.key === "Escape") {

                    this.closeMenu();

                }

            }

        );

        window.addEventListener(

            "scroll",

            () => this.handleScroll()

        );

    },

    /* ======================================================
       TOGGLE MENU
    ====================================================== */

    toggleMenu() {

        this.mobileMenu?.classList.toggle("active");

        this.overlay?.classList.toggle("active");

        this.menuToggle?.classList.toggle("active");

        document.body.classList.toggle("menu-open");

    },

    /* ======================================================
       CLOSE MENU
    ====================================================== */

    closeMenu() {

        this.mobileMenu?.classList.remove("active");

        this.overlay?.classList.remove("active");

        this.menuToggle?.classList.remove("active");

        document.body.classList.remove("menu-open");

    },

       /* ======================================================
       STICKY HEADER
    ====================================================== */

    handleScroll() {

        if (!this.header) return;

        if (window.scrollY > 60) {

            this.header.classList.add("scrolled");

        } else {

            this.header.classList.remove("scrolled");

        }

    },

    /* ======================================================
       ACTIVE MENU
    ====================================================== */

    setActiveMenu() {

        const page =
            window.location.pathname.split("/").pop() || "index.html";

        this.navLinks.forEach(link => {

            const href = link.getAttribute("href");

            if (href === page) {

                link.classList.add("active");

            }

        });

    },

    /* ======================================================
       CLOSE MOBILE AFTER LINK CLICK
    ====================================================== */

    bindMenuLinks() {

        const links = DEEN.helper.$$(".mobile-menu a");

        links.forEach(link => {

            link.addEventListener("click", () => {

                this.closeMenu();

            });

        });

    },

    /* ======================================================
       ACCESSIBILITY
    ====================================================== */

    accessibility() {

        if (!this.menuToggle) return;

        this.menuToggle.setAttribute(

            "aria-expanded",

            "false"

        );

        this.menuToggle.addEventListener(

            "click",

            () => {

                const expanded =

                    this.menuToggle.classList.contains("active");

                this.menuToggle.setAttribute(

                    "aria-expanded",

                    expanded

                );

            }

        );

    }

};

/* ==========================================================
   INITIALIZE
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        DEEN.navigation.init();

        DEEN.navigation.bindMenuLinks();

        DEEN.navigation.accessibility();

    }

);

