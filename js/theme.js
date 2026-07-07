"use strict";

/* ==========================================================
   DEEN WEBSITE
   THEME MODULE
========================================================== */

window.DEEN = window.DEEN || {};

DEEN.theme = {

    init() {

        this.button = document.querySelector(".theme-toggle");

        this.icon = this.button?.querySelector("i");

        this.loadTheme();

        this.bindEvents();

    },

    /* ======================================================
       EVENTS
    ====================================================== */

    bindEvents() {

        if (!this.button) return;

        this.button.addEventListener(

            "click",

            () => this.toggle()

        );

    },

    /* ======================================================
       TOGGLE
    ====================================================== */

    toggle() {

        document.body.classList.toggle("dark-theme");

        const dark =

            document.body.classList.contains("dark-theme");

        localStorage.setItem(

            "deen-theme",

            dark ? "dark" : "light"

        );

        this.updateIcon(dark);

    },

    /* ======================================================
       LOAD
    ====================================================== */

    loadTheme() {

        const saved =

            localStorage.getItem("deen-theme");

        if (saved === "dark") {

            document.body.classList.add("dark-theme");

            this.updateIcon(true);

        } else {

            this.updateIcon(false);

        }

    },

    /* ======================================================
       ICON
    ====================================================== */

    updateIcon(dark) {

        if (!this.icon) return;

        this.icon.className =

            dark

                ? "fa-solid fa-sun"

                : "fa-solid fa-moon";

    }

};

/* ==========================================================
   INITIALIZE
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        DEEN.theme.init();

    }

);
