"use strict";

/* ==========================================================
   DEEN WEBSITE
   MODAL MODULE
========================================================== */

window.DEEN = window.DEEN || {};

DEEN.modal = {

    init() {

        this.cache();

        if (!this.modal) return;

        this.bindEvents();

    },

    /* ======================================================
       CACHE
    ====================================================== */

    cache() {

        this.modal =
            document.querySelector("[data-modal]");

        this.openButtons =
            document.querySelectorAll("[data-modal-open]");

        this.closeButtons =
            document.querySelectorAll("[data-modal-close]");

    },

    /* ======================================================
       EVENTS
    ====================================================== */

    bindEvents() {

        this.openButtons.forEach(button => {

            button.addEventListener(

                "click",

                () => this.open()

            );

        });

        this.closeButtons.forEach(button => {

            button.addEventListener(

                "click",

                () => this.close()

            );

        });

        this.modal.addEventListener(

            "click",

            e => {

                if (e.target === this.modal) {

                    this.close();

                }

            }

        );

        document.addEventListener(

            "keydown",

            e => {

                if (e.key === "Escape") {

                    this.close();

                }

            }

        );

    },

    /* ======================================================
       OPEN
    ====================================================== */

    open() {

        this.modal.classList.add("active");

        document.body.classList.add("modal-open");

    },

    /* ======================================================
       CLOSE
    ====================================================== */

    close() {

        this.modal.classList.remove("active");

        document.body.classList.remove("modal-open");

    }

};

/* ==========================================================
   INITIALIZE
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        DEEN.modal.init();

    }

);
