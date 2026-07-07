"use strict";

/* ==========================================================
   DEEN WEBSITE
   APPLICATION
   Version 2.0
========================================================== */

window.DEEN = window.DEEN || {};

DEEN.app = {

    version: "2.0.0",

    name: "DEEN Website",

    init() {

        console.log(

            `%c${this.name} v${this.version} Loaded Successfully`,

            "color:#0F766E;font-weight:bold;font-size:14px"

        );

        this.performance();

    },

    /* ======================================================
       PERFORMANCE
    ====================================================== */

    performance() {

        window.addEventListener(

            "load",

            () => {

                if (

                    "performance" in window

                ) {

                    const time =

                        performance.now().toFixed(0);

                    console.log(

                        `Page Ready in ${time} ms`

                    );

                }

            }

        );

    }

};

/* ==========================================================
   START APPLICATION
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        DEEN.app.init();

    }

);
