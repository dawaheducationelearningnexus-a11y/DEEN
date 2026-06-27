'use strict';

/* ==========================================
   DEEN Counter Animation
========================================== */

class CounterManager {

    constructor() {

        this.counters = document.querySelectorAll('.counter');

        if (!this.counters.length) return;

        this.init();

    }

    init() {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    this.animate(entry.target);

                    observer.unobserve(entry.target);

                }

            });

        }, {

            threshold: 0.5

        });

        this.counters.forEach(counter => {

            observer.observe(counter);

        });

    }

    animate(counter) {

        const target = Number(counter.dataset.target) || 0;

        const duration = 2000;

        const startTime = performance.now();

        const update = (currentTime) => {

            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );

            const value = Math.floor(progress * target);

            counter.textContent = value;

            if (progress < 1) {

                requestAnimationFrame(update);

            } else {

                counter.textContent = target;

            }

        };

        requestAnimationFrame(update);

    }

}

document.addEventListener('DOMContentLoaded', () => {

    new CounterManager();

});
