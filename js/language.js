"use strict";

/* ==========================================================
   DEEN WEBSITE
   LANGUAGE MODULE
========================================================== */

window.DEEN = window.DEEN || {};

DEEN.language = {

    current: "bn",

    init() {

        this.button =
            DEEN.helper.$(
                DEEN.constants.SELECTOR.languageToggle
            );

        this.load();

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

        this.current =

            this.current === "bn"

                ? "en"

                : "bn";

        localStorage.setItem(

            "deen-language",

            this.current

        );

        this.updateButton();

    },

    /* ======================================================
       LOAD
    ====================================================== */

    load() {

        const saved =

            localStorage.getItem("deen-language");

        if (saved) {

            this.current = saved;

        }

        this.updateButton();

    },

    /* ======================================================
       BUTTON
    ====================================================== */

    updateButton() {

        if (!this.button) return;

        this.button.textContent =

            this.current === "bn"

                ? "🌐 বাংলা"

                : "🌐 English";

    }

};

/* ==========================================================
   INITIALIZE
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        DEEN.language.init();

    }

);
