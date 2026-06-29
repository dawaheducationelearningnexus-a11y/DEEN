/* ==========================================================
   DEEN Language Framework
========================================================== */

"use strict";

/* ==========================================================
   Language Engine
========================================================== */

function initLanguage() {

    const html = document.documentElement;

    const storageKey = "deen-language";

    /* ---------- Apply Language ---------- */

    function applyLanguage(lang) {

        html.setAttribute("lang", lang);

        if (lang === "ar") {

            html.setAttribute("dir", "rtl");

        } else {

            html.setAttribute("dir", "ltr");

        }

        localStorage.setItem(storageKey, lang);

    }

    /* ---------- Restore ---------- */

    const savedLanguage = localStorage.getItem(storageKey);

    if (savedLanguage) {

        applyLanguage(savedLanguage);

    } else {

        applyLanguage("bn");

    }

    /* ---------- Language Buttons ---------- */

    document.querySelectorAll("[data-language]").forEach(button => {

        button.addEventListener("click", () => {

            applyLanguage(button.dataset.language);

        });

    });

}
