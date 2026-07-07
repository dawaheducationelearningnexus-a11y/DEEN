"use strict";

/* ==========================================================
   DEEN WEBSITE
   ACCESSIBILITY MODULE
========================================================== */

window.DEEN = window.DEEN || {};

DEEN.accessibility = {

    init() {

        this.enableKeyboardNavigation();

        this.enableFocusVisible();

        this.enableEscapeKey();

    },

    /* ======================================================
       KEYBOARD NAVIGATION
    ====================================================== */

    enableKeyboardNavigation() {

        document.addEventListener("keydown", e => {

            if (e.key === "Tab") {

                document.body.classList.add("using-keyboard");

            }

        });

        document.addEventListener("mousedown", () => {

            document.body.classList.remove("using-keyboard");

        });

    },

    /* ======================================================
       FOCUS VISIBLE
    ====================================================== */

    enableFocusVisible() {

        const focusable = document.querySelectorAll(

            "a, button, input, textarea, select"

        );

        focusable.forEach(item => {

            item.addEventListener("focus", () => {

                item.classList.add("focus-visible");

            });

            item.addEventListener("blur", () => {

                item.classList.remove("focus-visible");

            });

        });

    },

    /* ======================================================
       ESCAPE KEY
    ====================================================== */

    enableEscapeKey() {

        document.addEventListener("keydown", e => {

            if (e.key === "Escape") {

                const active = document.activeElement;

                if (active) {

                    active.blur();

                }

            }

        });

    }

};

/* ==========================================================
   INITIALIZE
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        DEEN.accessibility.init();

    }

);
