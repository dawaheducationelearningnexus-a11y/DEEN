"use strict";

/* ==========================================================
   DEEN WEBSITE
   Slider System
   Module 7-B — Part 1
========================================================== */

class Slider {

    constructor(selector, options = {}) {

        this.slider = document.querySelector(selector);

        if (!this.slider) return;

        this.slides = this.slider.querySelectorAll(".slide");

        this.prevBtn = this.slider.querySelector(".slider-prev");
        this.nextBtn = this.slider.querySelector(".slider-next");

        this.current = 0;

        this.total = this.slides.length;

        this.interval = options.interval || 5000;

        this.autoPlay = options.autoPlay ?? true;

        this.timer = null;

        this.init();

    }

    /* ======================================================
       INITIALIZE
    ====================================================== */

    init() {

        if (this.total <= 1) return;

        this.showSlide(this.current);

        this.events();

        if (this.autoPlay) {

            this.start();

        }

    }

    /* ======================================================
       SHOW SLIDE
    ====================================================== */

    showSlide(index) {

        this.slides.forEach(slide => {

            slide.classList.remove("active");

        });

        this.slides[index].classList.add("active");

    }

    /* ======================================================
       NEXT
    ====================================================== */

    next() {

        this.current++;

        if (this.current >= this.total) {

            this.current = 0;

        }

        this.showSlide(this.current);

    }

    /* ======================================================
       PREVIOUS
    ====================================================== */

    prev() {

        this.current--;

        if (this.current < 0) {

            this.current = this.total - 1;

        }

        this.showSlide(this.current);

    }

    /* ======================================================
       AUTOPLAY
    ====================================================== */

    start() {

        this.stop();

        this.timer = setInterval(() => {

            this.next();

        }, this.interval);

    }

    stop() {

        clearInterval(this.timer);

    }

    /* ======================================================
       EVENTS
    ====================================================== */

    events() {

        this.nextBtn?.addEventListener("click", () => {

            this.next();

            this.start();

        });

        this.prevBtn?.addEventListener("click", () => {

            this.prev();

            this.start();

        });

        this.slider.addEventListener("mouseenter", () => {

            this.stop();

        });

        this.slider.addEventListener("mouseleave", () => {

            if (this.autoPlay) {

                this.start();

            }

        });

    }

}

/* ==========================================================
   INITIALIZE HERO SLIDER
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    new Slider(".hero-slider", {

        autoPlay: true,

        interval: 5000

    });

});
