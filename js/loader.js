/* ==========================================================
   DEEN Loader Framework
========================================================== */

"use strict";

/* ==========================================================
   Loader Engine
========================================================== */

function initLoader() {

    const preloader = document.getElementById("preloader");

    if (!preloader) return;

    window.addEventListener("load", () => {

        preloader.classList.add("hidden");

        setTimeout(() => {

            preloader.remove();

        }, 600);

    });

}
