"use strict";

/* ==========================================================
   DEEN WEBSITE
   COUNTER MODULE
========================================================== */

window.DEEN = window.DEEN || {};

DEEN.counter = {

    started: false,

    init() {

        this.counters = document.querySelectorAll(".counter");

        if (!this.counters.length) return;

        this.observe();

    },

    /* ======================================================
       OBSERVER
    ====================================================== */

    observe() {

        const observer = new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (

                        entry.isIntersecting &&

                        !this.started

                    ) {

                        this.started = true;

                        this.start();

                    }

                });

            },

            {

                threshold: .35

            }

        );

        observer.observe(this.counters[0]);

    },

    /* ======================================================
       START
    ====================================================== */

    start() {

        this.counters.forEach(counter => {

            const target = Number(

                counter.dataset.count

            );

            let current = 0;

            const speed = Math.max(

                20,

                target / 100

            );

            const update = () => {

                current += speed;

                if (current >= target) {

                    counter.textContent =
                        target.toLocaleString() + "+";

                    return;

                }

                counter.textContent =
                    Math.floor(current).toLocaleString();

                requestAnimationFrame(update);

            };

            update();

        });

    }

};

/* ==========================================================
   INITIALIZE
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        DEEN.counter.init();

    }

);
