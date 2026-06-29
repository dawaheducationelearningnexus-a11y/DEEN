/* ==========================================================
   DEEN Animation Framework
========================================================== */

"use strict";

/* ==========================================================
   Animation Engine
========================================================== */

function initAnimations() {

    const animatedItems = document.querySelectorAll(

        ".fade-up, .fade-left, .fade-right, .zoom"

    );

    if (!animatedItems.length) return;

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {

            threshold: 0.15,

            rootMargin: "0px 0px -60px 0px"

        }

    );

    animatedItems.forEach(item => {

        observer.observe(item);

    });

}
