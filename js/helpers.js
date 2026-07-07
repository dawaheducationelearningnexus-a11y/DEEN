"use strict";

/* ==========================================================
   DEEN WEBSITE
   HELPER FUNCTIONS
========================================================== */

window.DEEN = window.DEEN || {};

DEEN.helper = {

    /* ======================================================
       SINGLE ELEMENT
    ====================================================== */

    $ (selector, parent = document) {

        return parent.querySelector(selector);

    },

    /* ======================================================
       MULTIPLE ELEMENTS
    ====================================================== */

    $$ (selector, parent = document) {

        return [...parent.querySelectorAll(selector)];

    },

    /* ======================================================
       ADD CLASS
    ====================================================== */

    addClass(element, className) {

        if (element) {

            element.classList.add(className);

        }

    },

    /* ======================================================
       REMOVE CLASS
    ====================================================== */

    removeClass(element, className) {

        if (element) {

            element.classList.remove(className);

        }

    },

    /* ======================================================
       TOGGLE CLASS
    ====================================================== */

    toggleClass(element, className) {

        if (element) {

            element.classList.toggle(className);

        }

    },

    /* ======================================================
       HAS CLASS
    ====================================================== */

    hasClass(element, className) {

        if (!element) return false;

        return element.classList.contains(className);

    },

    /* ======================================================
       EVENT LISTENER
    ====================================================== */

    on(element, event, callback) {

        if (element) {

            element.addEventListener(event, callback);

        }

    },

    /* ======================================================
       SCROLL TOP
    ====================================================== */

    scrollTop() {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    },

    /* ======================================================
       WINDOW WIDTH
    ====================================================== */

    screen() {

        return window.innerWidth;

    },

    /* ======================================================
       MOBILE CHECK
    ====================================================== */

    isMobile() {

        return window.innerWidth <= DEEN.config.mobileWidth;

    },

    /* ======================================================
       RANDOM NUMBER
    ====================================================== */

    random(min, max) {

        return Math.floor(

            Math.random() * (max - min + 1)

        ) + min;

    }

};

Object.freeze(DEEN.helper);
