"use strict";

/* ==========================================================
   DEEN WEBSITE
   Navigation System
   Module 7-A — Part 1
========================================================== */

class Navigation {

    constructor() {

        this.header = document.querySelector(".site-header");
        this.menuToggle = document.querySelector(".menu-toggle");
        this.mobileMenu = document.querySelector(".mobile-menu");
        this.overlay = document.querySelector(".menu-overlay");

        this.init();

    }

    init() {

        this.mobileMenuToggle();
        this.stickyHeader();
        this.activeNavigation();
        this.keyboardSupport();

    }

    /* ======================================================
       MOBILE MENU
    ====================================================== */

    mobileMenuToggle() {

        if (!this.menuToggle || !this.mobileMenu) return;

        this.menuToggle.addEventListener("click", () => {

            this.mobileMenu.classList.toggle("active");

            this.menuToggle.classList.toggle("active");

            document.body.classList.toggle("menu-open");

            if (this.overlay) {
                this.overlay.classList.toggle("active");
            }

        });

        if (this.overlay) {

            this.overlay.addEventListener("click", () => {

                this.closeMenu();

            });

        }

    }

    /* ======================================================
       CLOSE MENU
    ====================================================== */

    closeMenu() {

        if (this.mobileMenu) {
            this.mobileMenu.classList.remove("active");
        }

        if (this.menuToggle) {
            this.menuToggle.classList.remove("active");
        }

        if (this.overlay) {
            this.overlay.classList.remove("active");
        }

        document.body.classList.remove("menu-open");

    }

    /* ======================================================
       STICKY HEADER
    ====================================================== */

    stickyHeader() {

        if (!this.header) return;

        window.addEventListener("scroll", () => {

            if (window.scrollY > 60) {

                this.header.classList.add("scrolled");

            } else {

                this.header.classList.remove("scrolled");

            }

        });

    }

    /* ======================================================
       ACTIVE MENU
    ====================================================== */

    activeNavigation() {

        const links = document.querySelectorAll(".nav-menu a");

        const currentPage = window.location.pathname.split("/").pop();

        links.forEach(link => {

            const href = link.getAttribute("href");

            if (href === currentPage || (currentPage === "" && href === "index.html")) {

                link.classList.add("active");

            }

        });

    }

    /* ======================================================
       ESC KEY SUPPORT
    ====================================================== */

    keyboardSupport() {

        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {

                this.closeMenu();

            }

        });

    }

}

/* ==========================================================
   INITIALIZE
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    new Navigation();

});

/* ==========================================================
   Module 7-A — Part 2
   Advanced Navigation Features
========================================================== */

class NavigationAdvanced extends Navigation {

    constructor() {

        super();

        this.submenuButtons = document.querySelectorAll(".submenu-toggle");
        this.megaItems = document.querySelectorAll(".has-mega");

        this.initAdvanced();

    }

    initAdvanced() {

        this.outsideClickClose();
        this.mobileSubmenu();
        this.smoothScroll();
        this.resizeHandler();
        this.focusTrap();

    }

    /* ======================================================
       OUTSIDE CLICK
    ====================================================== */

    outsideClickClose() {

        document.addEventListener("click", (event) => {

            if (!this.mobileMenu || !this.menuToggle) return;

            const insideMenu = this.mobileMenu.contains(event.target);
            const toggle = this.menuToggle.contains(event.target);

            if (!insideMenu && !toggle) {

                this.closeMenu();

            }

        });

    }

    /* ======================================================
       MOBILE SUB MENU
    ====================================================== */

    mobileSubmenu() {

        this.submenuButtons.forEach(button => {

            button.addEventListener("click", () => {

                const parent = button.closest(".menu-item");

                if (parent) {

                    parent.classList.toggle("open");

                }

            });

        });

    }

    /* ======================================================
       SMOOTH SCROLL
    ====================================================== */

    smoothScroll() {

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {

            anchor.addEventListener("click", e => {

                const id = anchor.getAttribute("href");

                if (id === "#") return;

                const target = document.querySelector(id);

                if (!target) return;

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth",
                    block: "start"

                });

                this.closeMenu();

            });

        });

    }

    /* ======================================================
       WINDOW RESIZE
    ====================================================== */

    resizeHandler() {

        window.addEventListener("resize", () => {

            if (window.innerWidth > 992) {

                this.closeMenu();

            }

        });

    }

    /* ======================================================
       ACCESSIBILITY
    ====================================================== */

    focusTrap() {

        document.addEventListener("keydown", event => {

            if (!this.mobileMenu) return;

            if (!this.mobileMenu.classList.contains("active")) return;

            if (event.key !== "Tab") return;

            const focusable = this.mobileMenu.querySelectorAll(
                'a,button,input,select,textarea,[tabindex]:not([tabindex="-1"])'
            );

            if (focusable.length === 0) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {

                event.preventDefault();

                last.focus();

            }

            else if (!event.shiftKey && document.activeElement === last) {

                event.preventDefault();

                first.focus();

            }

        });

    }

}

/* ==========================================================
   INITIALIZE ADVANCED NAVIGATION
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    new NavigationAdvanced();

});

/* ==========================================================
   Module 7-A — Part 3 (FINAL)
   Mega Menu & Navigation Utilities
========================================================== */

class NavigationUtilities {

    constructor() {

        this.header = document.querySelector(".site-header");
        this.progressBar = document.querySelector(".scroll-progress");

        this.init();

    }

    init() {

        this.handleMegaMenu();
        this.scrollProgress();
        this.closeOnLinkClick();

    }

    /* ======================================================
       MEGA MENU (Desktop)
    ====================================================== */

    handleMegaMenu() {

        const megaItems = document.querySelectorAll(".has-mega");

        megaItems.forEach(item => {

            item.addEventListener("mouseenter", () => {

                if (window.innerWidth > 992) {

                    item.classList.add("mega-open");

                }

            });

            item.addEventListener("mouseleave", () => {

                item.classList.remove("mega-open");

            });

        });

    }

    /* ======================================================
       SCROLL PROGRESS
    ====================================================== */

    scrollProgress() {

        if (!this.progressBar) return;

        window.addEventListener("scroll", () => {

            const scrollTop = window.scrollY;

            const documentHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const progress =
                (scrollTop / documentHeight) * 100;

            this.progressBar.style.width = `${progress}%`;

        });

    }

    /* ======================================================
       CLOSE MENU AFTER CLICK
    ====================================================== */

    closeOnLinkClick() {

        const links = document.querySelectorAll(".mobile-menu a");

        links.forEach(link => {

            link.addEventListener("click", () => {

                const mobileMenu =
                    document.querySelector(".mobile-menu");

                const overlay =
                    document.querySelector(".menu-overlay");

                const toggle =
                    document.querySelector(".menu-toggle");

                mobileMenu?.classList.remove("active");

                overlay?.classList.remove("active");

                toggle?.classList.remove("active");

                document.body.classList.remove("menu-open");

            });

        });

    }

}

/* ==========================================================
   INITIALIZE UTILITIES
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    new NavigationUtilities();

});

