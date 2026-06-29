/* ==========================================================
   DEEN Scroll Framework
========================================================== */

"use strict";

/* ==========================================================
   Scroll Engine
========================================================== */

function initScroll() {

    const scrollTop = document.getElementById("scrollTop");
    const progress = document.querySelector(".scroll-progress");

    /* ---------- Scroll Event ---------- */

    window.addEventListener("scroll", () => {

        const scrollY = window.scrollY;

        const pageHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percent = (scrollY / pageHeight) * 100;

        /* Progress */

        if (progress)

            progress.style.width = percent + "%";

        /* Scroll Top Button */

        if (scrollTop) {

            if (scrollY > 300)

                scrollTop.classList.add("show");

            else

                scrollTop.classList.remove("show");

        }

    });

    /* ---------- Scroll To Top ---------- */

    scrollTop?.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    /* ---------- Smooth Anchor ---------- */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", e => {

            const id = link.getAttribute("href");

            if(id === "#") return;

            const target = document.querySelector(id);

            if(!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        });

    });

}
