"use strict";

/* ==========================================================
   DEEN WEBSITE
   SCROLL MODULE
========================================================== */

window.DEEN = window.DEEN || {};

DEEN.scroll = {

    init() {

        this.cache();

        this.bindEvents();

        this.update();

    },

    /* ======================================================
       CACHE
    ====================================================== */

    cache() {

        this.scrollTopButton =
            DEEN.helper.$(
                DEEN.constants.SELECTOR.scrollTop
            );

        this.progressBar =
            DEEN.helper.$(
                DEEN.constants.SELECTOR.progressBar
            );

    },

    /* ======================================================
       EVENTS
    ====================================================== */

    bindEvents() {

        window.addEventListener(

            "scroll",

            () => this.update()

        );

        if (this.scrollTopButton) {

            this.scrollTopButton.addEventListener(

                "click",

                () => DEEN.helper.scrollTop()

            );

        }

    },

    /* ======================================================
       UPDATE
    ====================================================== */

    update() {

        this.updateScrollButton();

        this.updateProgressBar();

    },

    /* ======================================================
       SCROLL BUTTON
    ====================================================== */

    updateScrollButton() {

        if (!this.scrollTopButton) return;

        if (window.scrollY > 500) {

            this.scrollTopButton.classList.add("show");

        } else {

            this.scrollTopButton.classList.remove("show");

        }

    },

    /* ======================================================
       PROGRESS BAR
    ====================================================== */

    updateProgressBar() {

        if (!this.progressBar) return;

        const totalHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress =
            (window.scrollY / totalHeight) * 100;

        this.progressBar.style.width =
            `${progress}%`;

    }

};

/* ==========================================================
   INITIALIZE
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        DEEN.scroll.init();

    }

);

