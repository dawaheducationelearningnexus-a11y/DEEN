'use strict';

/* ==========================================
   DEEN - Scroll Manager
   Version: 1.0
========================================== */

class ScrollManager {

    constructor() {

        this.scrollTopBtn = document.getElementById('scrollTop');
        this.progressBar = document.querySelector('.scroll-progress');
        this.header = document.querySelector('.site-header');

        this.lastScroll = 0;
        this.ticking = false;

        this.init();

    }

    init() {

        this.bindEvents();

        this.observeAnimations();

        this.updateProgress();

        this.toggleScrollButton();

    }

    bindEvents() {

        window.addEventListener('scroll', () => {

            if (!this.ticking) {

                window.requestAnimationFrame(() => {

                    this.updateProgress();

                    this.toggleScrollButton();

                    this.headerEffect();

                    this.ticking = false;

                });

                this.ticking = true;

            }

        });

        if (this.scrollTopBtn) {

            this.scrollTopBtn.addEventListener('click', () => {

                window.scrollTo({

                    top: 0,

                    behavior: 'smooth'

                });

            });

        }

    }

    updateProgress() {

        if (!this.progressBar) return;

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress =
            scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

        this.progressBar.style.width = progress + '%';

    }

    toggleScrollButton() {

        if (!this.scrollTopBtn) return;

        if (window.pageYOffset > 300) {

            this.scrollTopBtn.classList.add('show');

        } else {

            this.scrollTopBtn.classList.remove('show');

        }

    }

    headerEffect() {

        if (!this.header) return;

        const currentScroll = window.pageYOffset;

        if (currentScroll > 60) {

            this.header.classList.add('scrolled');

        } else {

            this.header.classList.remove('scrolled');

        }

        this.lastScroll = currentScroll;

    }

    observeAnimations() {

        const elements = document.querySelectorAll(
            '.fade-up, .fade-left, .fade-right, .zoom'
        );

        if (!elements.length) return;

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add('show');

                    observer.unobserve(entry.target);

                }

            });

        }, {

            threshold: 0.15,

            rootMargin: '0px 0px -50px 0px'

        });

        elements.forEach(element => {

            observer.observe(element);

        });

    }

}

/* ==========================================
   Initialize Scroll Manager
========================================== */

document.addEventListener('DOMContentLoaded', () => {

    new ScrollManager();

});
