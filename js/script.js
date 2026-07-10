'use strict';

/* ==========================================
   DEEN - Main Application Controller
========================================== */

class DeenApp {

    constructor() {

        this.preloader = document.getElementById('preloader');

        document.addEventListener(
            'DOMContentLoaded',
            () => this.init()
        );

    }

    init() {

        this.hidePreloader();

        this.bindGlobalEvents();

        console.log(
            'DEEN | Dawah Education & E-learning Nexus Loaded Successfully.'
        );

    }

    hidePreloader() {

        if (!this.preloader) return;

        window.addEventListener('load', () => {

            this.preloader.classList.add('loaded');

            setTimeout(() => {

                this.preloader.remove();

            }, 600);

        });

    }

    bindGlobalEvents() {

        document.addEventListener('keydown', (event) => {

            if (event.key === 'Escape') {

                document.body.classList.remove('menu-open');

            }

        });

        window.addEventListener('resize', () => {

            document.body.classList.remove('menu-open');

        });

    }

}

new DeenApp();

/* ==========================================================
   DEEN MUSIC PLAYER
========================================================== */

const musicButton = document.querySelector(".music-toggle");
const deenMusic = document.getElementById("deenMusic");

if (musicButton && deenMusic) {

    musicButton.addEventListener("click", () => {

        if (deenMusic.paused) {

            deenMusic.play();

            musicButton.classList.add("playing");

            musicButton.innerHTML =
                '<i class="fa-solid fa-pause"></i>';

        } else {

            deenMusic.pause();

            musicButton.classList.remove("playing");

            musicButton.innerHTML =
                '<i class="fa-solid fa-music"></i>';

        }

    });

}
