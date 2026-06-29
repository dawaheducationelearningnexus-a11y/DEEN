/* ==========================================================
   DEEN Counter Framework
========================================================== */

"use strict";

/* ==========================================================
   Counter Engine
========================================================== */

function initCounter() {

    const counters = document.querySelectorAll(".counter");

    if (!counters.length) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            const duration = 2000;

            const start = performance.now();

            function update(time) {

                const progress = Math.min(

                    (time - start) / duration,

                    1

                );

                counter.textContent = Math.floor(

                    progress * target

                );

                if (progress < 1)

                    requestAnimationFrame(update);

                else

                    counter.textContent = target;

            }

            requestAnimationFrame(update);

            observer.unobserve(counter);

        });

    }, {

        threshold: 0.4

    });

    counters.forEach(counter => {

        observer.observe(counter);

    });

}
