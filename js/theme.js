/* ==========================================================
   DEEN Theme Framework
========================================================== */

"use strict";

/* ==========================================================
   Theme Engine
========================================================== */

function initTheme() {

    const root = document.documentElement;

    const storageKey = "deen-theme";

    /* ---------- Apply Theme ---------- */

    function applyTheme(theme) {

        if (!theme) {

            root.removeAttribute("data-theme");

        } else {

            root.setAttribute("data-theme", theme);

        }

        localStorage.setItem(storageKey, theme);

    }

    /* ---------- Load Saved Theme ---------- */

    const savedTheme = localStorage.getItem(storageKey);

    if (savedTheme) {

        applyTheme(savedTheme);

    }

    /* ---------- Theme Buttons ---------- */

    document.querySelectorAll("[data-set-theme]").forEach(button => {

        button.addEventListener("click", () => {

            applyTheme(button.dataset.setTheme);

        });

    });

}
