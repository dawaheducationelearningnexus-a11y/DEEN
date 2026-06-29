/* ==========================================================
   DEEN Search Framework
========================================================== */

"use strict";

/* ==========================================================
   Search Engine
========================================================== */

function initSearch() {

    const searchButton =
        document.querySelector(".search-btn");

    const searchModal =
        document.getElementById("searchModal");

    const closeButton =
        document.querySelector(".search-close");

    const searchInput =
        document.querySelector(".search-input");

    if (!searchButton || !searchModal) return;

    /* ---------- Open ---------- */

    function openSearch() {

        searchModal.classList.add("active");

        document.body.classList.add("modal-open");

        setTimeout(() => {

            searchInput?.focus();

        },150);

    }

    /* ---------- Close ---------- */

    function closeSearch() {

        searchModal.classList.remove("active");

        document.body.classList.remove("modal-open");

    }

    /* ---------- Events ---------- */

    searchButton.addEventListener(

        "click",

        openSearch

    );

    closeButton?.addEventListener(

        "click",

        closeSearch

    );

    searchModal.addEventListener(

        "click",

        function(e){

            if(e.target===searchModal){

                closeSearch();

            }

        }

    );

    document.addEventListener(

        "keydown",

        function(e){

            if(e.key==="Escape")

                closeSearch();

        }

    );

}
