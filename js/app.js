/* ==========================================================
   DEEN Frontend Framework
   Main Application Controller
========================================================== */

"use strict";

/* ==========================================================
   DEEN APP
========================================================== */

const DEEN = {

    init() {

        console.log("DEEN Framework Initialized");

        this.startModules();

    },

    startModules() {

        if (typeof initLoader === "function")
            initLoader();

        if (typeof initNavigation === "function")
            initNavigation();

        if (typeof initHeroSlider === "function")
            initHeroSlider();

        if (typeof initCounter === "function")
            initCounter();

        if (typeof initScroll === "function")
            initScroll();

        if (typeof initAnimations === "function")
            initAnimations();

        if (typeof initTheme === "function")
            initTheme();

        if (typeof initLanguage === "function")
            initLanguage();

        if (typeof initAccessibility === "function")
            initAccessibility();

    }

};

/* ==========================================================
   START
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    DEEN.init();

});
