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
   DEEN PREMIUM MUSIC PLAYER
========================================================== */
const musicButton = document.getElementById("musicToggle");
const themeMusic = document.getElementById("backgroundMusic");

if (musicButton && themeMusic){

    /* Default Volume */

    themeMusic.volume = 0.30;

    /* Restore Previous State */

    if(localStorage.getItem("deenMusic") === "playing"){

        musicButton.classList.add("playing");

        musicButton.innerHTML =
            '<i class="fa-solid fa-pause"></i>';

    }

    musicButton.addEventListener("click", async()=>{

        if(themeMusic.paused){

            try{

                await themeMusic.play();

                musicButton.classList.add("playing");

                musicButton.innerHTML =
                    '<i class="fa-solid fa-pause"></i>';

                localStorage.setItem(
                    "deenMusic",
                    "playing"
                );

            }catch(error){

                console.log(error);

            }

        }else{

            themeMusic.pause();

            musicButton.classList.remove("playing");

            musicButton.innerHTML =
                '<i class="fa-solid fa-music"></i>';

            localStorage.setItem(
                "deenMusic",
                "paused"
            );

        }

    });

}
