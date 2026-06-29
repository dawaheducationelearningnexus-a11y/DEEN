/* ==========================================================
   DEEN Accessibility Framework
========================================================== */

"use strict";

/* ==========================================================
   Accessibility Engine
========================================================== */

function initAccessibility() {

    /* ---------- Skip Link ---------- */

    const skipLink = document.querySelector(".skip-link");

    if (skipLink) {

        skipLink.addEventListener("click", function () {

            const target = document.querySelector("#main");

            if (target) {

                target.setAttribute("tabindex", "-1");

                target.focus();

            }

        });

    }

    /* ---------- Keyboard Focus ---------- */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Tab") {

            document.body.classList.add("keyboard-navigation");

        }

    });

    document.addEventListener("mousedown", function () {

        document.body.classList.remove("keyboard-navigation");

    });

    /* ---------- Reduced Motion ---------- */

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    if (prefersReducedMotion.matches) {

        document.documentElement.classList.add("reduce-motion");

    }

}
