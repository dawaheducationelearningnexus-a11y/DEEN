"use strict";

/* ==========================================================
   DEEN WEBSITE
   SEARCH MODULE
========================================================== */

window.DEEN = window.DEEN || {};

DEEN.search = {

    init() {

        this.cache();

        if (!this.input) return;

        this.bindEvents();

    },

    /* ======================================================
       CACHE
    ====================================================== */

    cache() {

        this.input =
            document.querySelector("[data-search]");

        this.items =
            document.querySelectorAll("[data-search-item]");

    },

    /* ======================================================
       EVENTS
    ====================================================== */

    bindEvents() {

        this.input.addEventListener(

            "input",

            () => this.filter()

        );

    },

    /* ======================================================
       FILTER
    ====================================================== */

    filter() {

        const keyword =

            this.input.value

            .trim()

            .toLowerCase();

        this.items.forEach(item => {

            const text =

                item.textContent.toLowerCase();

            item.style.display =

                text.includes(keyword)

                ? ""

                : "none";

        });

    }

};

/* ==========================================================
   INITIALIZE
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        DEEN.search.init();

    }

);
