/* ==========================================================
   DEEN Hero Slider Framework
========================================================== */

"use strict";

/* ==========================================================
   Hero Slider
========================================================== */

function initHeroSlider() {

    const slides = document.querySelectorAll(".hero-slide");

    if (!slides.length) return;

    let current = 0;

    const total = slides.length;

    function showSlide(index) {

        slides.forEach(slide => {

            slide.classList.remove("active");

        });

        slides[index].classList.add("active");

    }

    function nextSlide() {

        current++;

        if (current >= total)

            current = 0;

        showSlide(current);

    }

    showSlide(current);

    setInterval(nextSlide, 6000);

}
