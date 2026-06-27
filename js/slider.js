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

/* ==========================================================
   Module 7-B — Part 2
   Advanced Slider Features
========================================================== */

class AdvancedSlider extends Slider {

    constructor(selector, options = {}) {

        super(selector, options);

        if (!this.slider) return;

        this.dotsContainer = this.slider.querySelector(".slider-dots");
        this.counter = this.slider.querySelector(".slider-counter");

        this.touchStartX = 0;
        this.touchEndX = 0;

        this.initAdvanced();

    }

    /* ======================================================
       INITIALIZE
    ====================================================== */

    initAdvanced() {

        this.createDots();

        this.keyboardNavigation();

        this.touchSwipe();

        this.visibilityControl();

        this.updateCounter();

    }

    /* ======================================================
       DOTS
    ====================================================== */

    createDots() {

        if (!this.dotsContainer) return;

        this.dotsContainer.innerHTML = "";

        this.slides.forEach((_, index) => {

            const dot = document.createElement("button");

            dot.className = "slider-dot";

            if (index === this.current) {

                dot.classList.add("active");

            }

            dot.addEventListener("click", () => {

                this.current = index;

                this.showSlide(this.current);

                this.updateDots();

                this.updateCounter();

                this.start();

            });

            this.dotsContainer.appendChild(dot);

        });

    }

    updateDots() {

        if (!this.dotsContainer) return;

        this.dotsContainer
            .querySelectorAll(".slider-dot")
            .forEach((dot, index) => {

                dot.classList.toggle(
                    "active",
                    index === this.current
                );

            });

    }

    /* ======================================================
       COUNTER
    ====================================================== */

    updateCounter() {

        if (!this.counter) return;

        this.counter.textContent =
            `${this.current + 1} / ${this.total}`;

    }

    /* ======================================================
       KEYBOARD
    ====================================================== */

    keyboardNavigation() {

        document.addEventListener("keydown", (event) => {

            if (event.key === "ArrowRight") {

                this.next();

                this.updateDots();

                this.updateCounter();

                this.start();

            }

            if (event.key === "ArrowLeft") {

                this.prev();

                this.updateDots();

                this.updateCounter();

                this.start();

            }

        });

    }

    /* ======================================================
       TOUCH
    ====================================================== */

    touchSwipe() {

        this.slider.addEventListener("touchstart", e => {

            this.touchStartX = e.changedTouches[0].clientX;

        });

        this.slider.addEventListener("touchend", e => {

            this.touchEndX = e.changedTouches[0].clientX;

            const distance =
                this.touchStartX - this.touchEndX;

            if (distance > 60) {

                this.next();

            }

            else if (distance < -60) {

                this.prev();

            }

            this.updateDots();

            this.updateCounter();

            this.start();

        });

    }

    /* ======================================================
       PAGE VISIBILITY
    ====================================================== */

    visibilityControl() {

        document.addEventListener("visibilitychange", () => {

            if (document.hidden) {

                this.stop();

            }

            else if (this.autoPlay) {

                this.start();

            }

        });

    }

}

/* ==========================================================
   UPDATE SLIDE METHODS
========================================================== */

AdvancedSlider.prototype.next = function () {

    Slider.prototype.next.call(this);

    this.updateDots();

    this.updateCounter();

};

AdvancedSlider.prototype.prev = function () {

    Slider.prototype.prev.call(this);

    this.updateDots();

    this.updateCounter();

};

/* ==========================================================
   INITIALIZE ADVANCED SLIDER
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    new AdvancedSlider(".hero-slider", {

        autoPlay: true,

        interval: 5000

    });

});
