"use strict";

/* ==========================================================
   DEEN WEBSITE
   LOADER MODULE
========================================================== */

window.DEEN = window.DEEN || {};

DEEN.loader = {

    init() {

        this.loader = document.getElementById("preloader");

        if (!this.loader) return;

        window.addEventListener(

            "load",

            () => this.hide()

        );

    },

    /* ======================================================
       HIDE LOADER
    ====================================================== */

    hide() {

        this.loader.style.opacity = "0";

        this.loader.style.visibility = "hidden";

        this.loader.style.pointerEvents = "none";

        setTimeout(() => {

            this.loader.remove();

        }, 700);

    }

};

/* ==========================================================
   INITIALIZE
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        DEEN.loader.init();

    }

);
