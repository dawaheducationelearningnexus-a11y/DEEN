"use strict";

/* ==========================================================
   DEEN WEBSITE
   HERO MODULE
========================================================== */

window.DEEN = window.DEEN || {};

DEEN.hero = {

    current: 0,

    interval: null,

    delay: 6000,

    init() {

        this.cache();

        if (!this.hero) return;

        this.start();

    },

    /* ======================================================
       CACHE
    ====================================================== */

    cache() {

        this.hero =
            DEEN.helper.$(".hero-section");

        this.slides =
            DEEN.helper.$$(".hero-slide", this.hero);

    },

    /* ======================================================
       START
    ====================================================== */

    start() {

        if (this.slides.length <= 1) return;

        this.interval = setInterval(() => {

            this.next();

        }, this.delay);

    },

    /* ======================================================
       NEXT
    ====================================================== */

    next() {

        this.slides[this.current]
            .classList.remove("active");

        this.current++;

        if (this.current >= this.slides.length) {

            this.current = 0;

        }

        this.slides[this.current]
            .classList.add("active");

    }

};

/* ==========================================================
   INITIALIZE
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        DEEN.hero.init();

    }

);
