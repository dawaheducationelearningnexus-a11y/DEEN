"use strict";

/* ==========================================================
   DEEN WEBSITE
   GLOBAL CONSTANTS
========================================================== */

window.DEEN = window.DEEN || {};

DEEN.constants = {

    /* ======================================================
       SELECTORS
    ====================================================== */

    SELECTOR: {

        body: "body",

        header: ".site-header",

        navigation: ".main-navigation",

        menuToggle: ".menu-toggle",

        mobileMenu: ".mobile-menu",

        menuOverlay: ".menu-overlay",

        navLinks: ".nav-menu a",

        hero: ".hero-section",

        heroImage: ".hero-image",

        heroContent: ".hero-content",

        scrollTop: "#scrollTop",

        preloader: "#preloader",

        progressBar: ".scroll-progress",

        counter: ".counter",

        themeToggle: ".theme-toggle",

        languageToggle: ".lang-toggle",

        reveal: ".reveal",

        modal: ".modal"

    },

    /* ======================================================
       CSS CLASSES
    ====================================================== */

    CLASS: {

        active: "active",

        open: "open",

        show: "show",

        hide: "hide",

        sticky: "sticky",

        scrolled: "scrolled",

        visible: "visible",

        current: "current",

        loading: "loading",

        menuOpen: "menu-open",

        dark: "dark-theme"

    },

    /* ======================================================
       EVENTS
    ====================================================== */

    EVENT: {

        click: "click",

        scroll: "scroll",

        resize: "resize",

        load: "load",

        input: "input",

        change: "change",

        keydown: "keydown",

        mouseenter: "mouseenter",

        mouseleave: "mouseleave"

    },

    /* ======================================================
       KEYBOARD
    ====================================================== */

    KEY: {

        ESC: "Escape",

        ENTER: "Enter",

        TAB: "Tab",

        SPACE: " "

    }

};

Object.freeze(DEEN.constants);
