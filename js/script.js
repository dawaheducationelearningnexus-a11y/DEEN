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

/* ==========================================================
   DEEN PROGRAM FILTER & SEARCH
   MODULE 6 — STEP 3
========================================================== */

const filterButtons =
document.querySelectorAll(".filter-btn");

const programCards =
document.querySelectorAll(".program-card-v2");

const searchInput =
document.querySelector(".program-search input");

/* ==========================
   FILTER BUTTON
========================== */

filterButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        /* Active Button */

        filterButtons.forEach(btn=>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter =
        button.dataset.filter;

        programCards.forEach(card=>{

            if(

                filter==="all" ||

                card.dataset.category===filter

            ){

                card.style.display="flex";

            }else{

                card.style.display="none";

            }

        });

    });

});
/* ==========================
   LIVE SEARCH
========================== */

if(searchInput){

searchInput.addEventListener("keyup",()=>{

    const value =
    searchInput.value.toLowerCase();

    programCards.forEach(card=>{

        const text =
        card.textContent.toLowerCase();

        if(text.includes(value)){

            card.style.display="flex";

        }else{

            card.style.display="none";

        }

    });

});

}
/* ==========================
   RESET FILTER AFTER SEARCH
========================== */

if(searchInput){

searchInput.addEventListener("search",()=>{

    if(searchInput.value===""){

        programCards.forEach(card=>{

            card.style.display="flex";

        });

    }

});

}
