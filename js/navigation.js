/* ==========================================================
   DEEN PREMIUM NAVIGATION
   navigation.js
   VERSION 5.0
   PART 1
   FOUNDATION
========================================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       CONFIG
    ====================================================== */

    const CONFIG = {

        stickyOffset: 30,

        hideOffset:120,

        showTolerance:15,
       
        enableAutoHide:true,
       
        animationSpeed: 300,

        enableKeyboard: true,

        enableFocusTrap: true,

        closeOnResize: true,

        mobileBreakpoint: 992,
       
        megaMenuDelay:150,

        megaMenuAnimation:300,

        enableMegaMenu:true
       

    };

    /* ======================================================
       DOM CACHE
    ====================================================== */

    const body = document.body;

    const html = document.documentElement;

    const header = document.querySelector(".site-header");

    const menuToggle = document.querySelector(".menu-toggle");

    const mobileMenu = document.querySelector(".mobile-menu");

    const menuOverlay = document.querySelector(".menu-overlay");

    const desktopMenu =
        document.querySelector(".nav-menu");

   const megaMenus =

    document.querySelectorAll(

        ".mega-menu"

    );

const megaTriggers =
document.querySelectorAll(".has-dropdown");

    const submenuButtons =
        document.querySelectorAll(".submenu-toggle");

    const mobileLinks =
        document.querySelectorAll(".mobile-menu a");

    /* ======================================================
       STATE
    ====================================================== */

    const state = {

        menuOpen:false,

        lastScroll:0,

        headerHidden:false,

        megaMenuOpen:false,
        isMobile:
            window.innerWidth <= CONFIG.mobileBreakpoint

    };

    /* ======================================================
       HELPERS
    ====================================================== */

    const hasElement = element => element !== null;

    const addClass = (el,name)=>{

        if(hasElement(el)){

            el.classList.add(name);

        }

    };

    const removeClass = (el,name)=>{

        if(hasElement(el)){

            el.classList.remove(name);

        }

    };

    const toggleClass = (el,name)=>{

        if(hasElement(el)){

            el.classList.toggle(name);

        }

    };

    /* ======================================================
       BODY SCROLL
    ====================================================== */

    function lockScroll(){

        body.classList.add("menu-open");

    }

    function unlockScroll(){

        body.classList.remove("menu-open");

    }

    /* ======================================================
       THROTTLE
    ====================================================== */

    function throttle(callback,delay){

        let waiting=false;

        return (...args)=>{

            if(waiting) return;

            callback(...args);

            waiting=true;

            setTimeout(()=>{

                waiting=false;

            },delay);

        };

    }

    /* ======================================================
       DEBOUNCE
    ====================================================== */

    function debounce(callback,delay){

        let timer;

        return (...args)=>{

            clearTimeout(timer);

            timer=setTimeout(()=>{

                callback(...args);

            },delay);

        };

    }

    /* ======================================================
       SAFE EVENT
    ====================================================== */

    function on(element,event,handler,options={}){

        if(hasElement(element)){

            element.addEventListener(

                event,

                handler,

                options

            );

        }

    }

    /* ======================================================
       INITIALIZE
    ====================================================== */

    function init(){

        unlockScroll();

        if(menuToggle){

            menuToggle.setAttribute(

                "aria-expanded",

                "false"

            );

        }

    }

    init();

   initializeMegaMenu();
/* ==========================================================
   MEGA MENU TIMER
========================================================== */

let megaMenuTimer = null;

/* ==========================================================
   OPEN MEGA MENU
========================================================== */

function openMegaMenu(trigger){

    if(!CONFIG.enableMegaMenu) return;

    clearTimeout(megaMenuTimer);

    closeMegaMenus();

    trigger.classList.add("mega-active");

    state.megaMenuOpen = true;

}
/* ==========================================================
   CLOSE ALL MEGA MENUS
========================================================== */

function closeMegaMenus(){

    megaTriggers.forEach(item=>{

        item.classList.remove(

            "mega-active"

        );

    });

    state.megaMenuOpen = false;

}

/* ==========================================================
   DELAY CLOSE
========================================================== */

function delayCloseMegaMenu(){

    clearTimeout(megaMenuTimer);

    megaMenuTimer = setTimeout(()=>{

        closeMegaMenus();

    },CONFIG.megaMenuDelay);

}

/* ==========================================================
   INITIALIZE MEGA MENU
========================================================== */

function initializeMegaMenu(){

    if(!CONFIG.enableMegaMenu) return;


   megaTriggers.forEach(trigger=>{
      trigger.addEventListener(

    "mouseenter",

    ()=>{

        clearTimeout(megaMenuTimer);

        openMegaMenu(trigger);

    }

);
trigger.addEventListener(

    "mouseleave",

    ()=>{

        delayCloseMegaMenu();

    }

);
});
   
}





/* ==========================================================
   DEEN Navigation
   PART 2
   Mobile Menu Engine
========================================================== */



/* ==========================================================
   OPEN MENU
========================================================== */

function openMenu(){

   if(state.menuOpen)return;
   
    state.menuOpen = true;
    mobileMenu.classList.add("active");

    menuOverlay.classList.add("active");

        lockScroll();
   
    menuToggle.setAttribute("aria-expanded","true");

    mobileMenu.setAttribute("aria-hidden","false");

}


/* ==========================================================
   CLOSE MENU
========================================================== */

function closeMenu(){

    if(!state.menuOpen)return;

    state.menuOpen = false;
    mobileMenu.classList.remove("active");

   menuOverlay.classList.remove("active");
   

      unlockScroll();

    menuToggle.setAttribute("aria-expanded","false");

    mobileMenu.setAttribute("aria-hidden","true");
   
    resetSubmenus();

}


/* ==========================================================
   TOGGLE
========================================================== */

function toggleMenu(){

   state.menuOpen
        ?closeMenu()
        :openMenu();

}


/* ==========================================================
   BUTTON
========================================================== */

menuToggle.addEventListener(

    "click",

    toggleMenu

);


/* ==========================================================
   OVERLAY
========================================================== */
menuOverlay.addEventListener(

    "click",

    closeMenu

);


/* ==========================================================
   ESC KEY
========================================================== */

document.addEventListener(

    "keydown",

    e=>{

        if(e.key==="Escape"){

            closeMenu();

        }

    }

);


/* ==========================================================
   RESIZE
========================================================== */




/* ==========================================================
   END
========================================================== */



/* ==========================================================
   DEEN PREMIUM NAVIGATION
   PART 03
   MOBILE SUBMENU ENGINE
========================================================== */


/* ==========================================================
   CLOSE ALL SUBMENUS
========================================================== */

function closeAllSubmenus(except=null){

    submenuButtons.forEach(button=>{

        const submenu=button.nextElementSibling;

        if(button===except) return;

        button.classList.remove("active");

        button.setAttribute(

            "aria-expanded",

            "false"

        );

        if(submenu){

            submenu.classList.remove("active");

           submenu.setAttribute(
    "aria-hidden",
    "true"
);
            submenu.style.maxHeight=null;

        }

    });

}


/* ==========================================================
   TOGGLE SUBMENU
========================================================== */

function toggleSubmenu(button){

    const submenu=button.nextElementSibling;

    if(!submenu) return;

    const opened=

        button.classList.contains("active");

    closeAllSubmenus(button);

    if(opened){

        button.classList.remove("active");

        button.setAttribute(

            "aria-expanded",

            "false"

        );

        submenu.classList.remove("active");

       submenu.setAttribute(
    "aria-hidden",
    "true"
);
        submenu.style.maxHeight=null;

        return;

    }

    button.classList.add("active");

    button.setAttribute(

        "aria-expanded",

        "true"

    );

    submenu.classList.add("active");

   submenu.setAttribute(
    "aria-hidden",
    "false"
);
    submenu.style.maxHeight=

        submenu.scrollHeight+"px";

}


/* ==========================================================
   INITIALIZE SUBMENU
========================================================== */

submenuButtons.forEach((button,index)=>{

    const submenu=

        button.nextElementSibling;

    if(submenu){

        submenu.style.maxHeight=null;

        submenu.setAttribute(

            "aria-hidden",

            "true"

        );

    }

    button.setAttribute(

        "aria-expanded",

        "false"

    );

    button.setAttribute(

        "aria-controls",

        "submenu-"+index

    );

    if(submenu){

        submenu.id="submenu-"+index;

    }

    on(

        button,

        "click",

        ()=>{

            toggleSubmenu(button);

        }

    );

});


/* ==========================================================
   CLOSE SUBMENUS WHEN MENU CLOSES
========================================================== */

function resetSubmenus(){

    closeAllSubmenus();
   
   
}

/* ==========================================================
   DEEN PREMIUM NAVIGATION
   PART 04
   HEADER ENGINE & NAVIGATION INTELLIGENCE
========================================================== */


/* ==========================================================
   STICKY HEADER
========================================================== */

function updateHeader(){

    if(!header) return;

    if(window.scrollY > CONFIG.stickyOffset){

        addClass(header,"scrolled");

    }else{

        removeClass(header,"scrolled");

    }

}

/* ==========================================================
   SMART HEADER VISIBILITY
========================================================== */

function updateHeaderVisibility(){

    if(

        !CONFIG.enableAutoHide ||

        !header ||

        state.menuOpen

    ){

        return;

    }

    const currentScroll = window.scrollY;

   if(currentScroll < 0){

    return;

}
/* ======================================================
   PAGE TOP RESET
====================================================== */

if(currentScroll <= CONFIG.hideOffset){

    removeClass(header,"hide");

    state.headerHidden = false;

    state.lastScroll = currentScroll;

    return;

}

    

    const scrollDifference =

        currentScroll - state.lastScroll;

    if(

    Math.abs(scrollDifference)

    < CONFIG.showTolerance

){

    return;

}
   
    if(

        scrollDifference >

        CONFIG.showTolerance

    ){

        if(!state.headerHidden){

            addClass(header,"hide");

            state.headerHidden = true;

        }

    }

    else if(

        scrollDifference <

        -CONFIG.showTolerance

    ){

        if(state.headerHidden){

            removeClass(header,"hide");

            state.headerHidden = false;

        }

    }

   if(currentScroll === 0){

    removeClass(header,"hide");

    state.headerHidden = false;

}
    state.lastScroll = currentScroll;

}
/* ==========================================================
   RAF SCROLL ENGINE
========================================================== */

let ticking=false;

function handleScroll(){

    if(ticking) return;

    window.requestAnimationFrame(()=>{

        updateHeader();

        updateHeaderVisibility();
       
        ticking=false;

    });

    ticking=true;

}

on(

    window,

    "scroll",

    handleScroll,

    {passive:true}

);


/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

function setActiveNavigation(){

    const currentPage=

        location.pathname

        .split("/")

        .pop() ||

        "index.html";

    document

        .querySelectorAll(

            ".nav-menu a,.mobile-nav-list a"

        )

        .forEach(link=>{

            const href=

                link.getAttribute("href");

            if(!href) return;

            if(href===currentPage){

                addClass(link,"active");

                const parent=

                    link.closest(".has-dropdown");

                if(parent){

                    addClass(parent,"active");

                }

            }

        });

}

setActiveNavigation();


/* ==========================================================
   RESIZE MANAGER
========================================================== */

const handleResize=

debounce(()=>{

    state.isMobile=

        window.innerWidth <=

        CONFIG.mobileBreakpoint;

    if(

        CONFIG.closeOnResize &&

        !state.isMobile &&

        state.menuOpen

    ){

        closeMenu();

    }

},200);

on(

    window,

    "resize",

    handleResize,

    {passive:true}

);


/* ==========================================================
   OUTSIDE CLICK
========================================================== */

on(

    document,

    "click",

    event=>{

        if(

            !state.menuOpen ||

            !mobileMenu ||

            !menuToggle

        ){

            return;

        }

        const insideMenu=

            mobileMenu.contains(event.target);

        const toggleClick=

            menuToggle.contains(event.target);

        if(

            !insideMenu &&

            !toggleClick

        ){

            closeMenu();

        }

    }

);


/* ==========================================================
   INITIAL HEADER STATE
========================================================== */

updateHeader();



/* ==========================================================
   DEEN PREMIUM NAVIGATION
   VERSION 5.0
   PART 05
   ENTERPRISE FINAL LAYER
========================================================== */


/* ==========================================================
   ACCESSIBILITY
========================================================== */

if(menuToggle){

    menuToggle.setAttribute(

        "aria-label",

        "Toggle Navigation Menu"

    );

}

if(mobileMenu){

    mobileMenu.setAttribute(

        "role",

        "navigation"

    );

}


/* ==========================================================
   FOCUS TRAP
========================================================== */

function trapFocus(event){

    if(

        !state.menuOpen ||

        !CONFIG.enableFocusTrap ||

        !mobileMenu

    ){

        return;

    }

    if(event.key!=="Tab") return;

    const focusable=

        mobileMenu.querySelectorAll(

            'a,button,[tabindex]:not([tabindex="-1"])'

        );

    if(!focusable.length) return;

    const first=focusable[0];

    const last=focusable[focusable.length-1];

    if(

        event.shiftKey &&

        document.activeElement===first

    ){

        event.preventDefault();

        last.focus();

    }

    else if(

        !event.shiftKey &&

        document.activeElement===last

    ){

        event.preventDefault();

        first.focus();

    }

}

on(

    document,

    "keydown",

    trapFocus

);


/* ==========================================================
   REDUCED MOTION
========================================================== */

const reducedMotion=

window.matchMedia(

    "(prefers-reduced-motion: reduce)"

);

if(reducedMotion.matches){

    html.classList.add(

        "reduce-motion"

    );

}


/* ==========================================================
   TOUCH DEVICE
========================================================== */

const touchDevice=

window.matchMedia(

    "(hover:none)"

).matches;

if(touchDevice){

    html.classList.add(

        "touch-device"

    );

}


/* ==========================================================
   INITIAL FOCUS
========================================================== */

function focusFirstMenuItem(){

    if(!mobileMenu) return;

    const first=

        mobileMenu.querySelector(

            "a,button"

        );

    first?.focus();

}


/* ==========================================================
   PATCH OPEN MENU
========================================================== */

const originalOpenMenu=openMenu;

openMenu=function(){

    originalOpenMenu();

    focusFirstMenuItem();

};


/* ==========================================================
   PAGE RESTORE
========================================================== */

window.addEventListener(

    "pageshow",

    ()=>{

        updateHeader();

    }

);


/* ==========================================================
   INITIALIZE
========================================================== */

updateHeader();

setActiveNavigation();


/* ==========================================================
   DEVELOPER FLAG
========================================================== */

console.info(

    "%cDEEN Navigation v5.0 Loaded",

    "color:#0F766E;font-weight:bold"

);


/* ==========================================================
   FUTURE READY
========================================================== */

/*

Reserved Modules

01. Mega Menu

02. Search Popup

03. Notification Panel

04. User Profile

05. Language Switcher

06. Theme Switcher

07. AI Search

08. Command Palette

09. Progress Indicator

10. Breadcrumb Engine

*/


/* ==========================================================
   END OF NAVIGATION.JS
========================================================== */


});
