/* ==========================================================
   DEEN PREMIUM NAVIGATION V4
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const body = document.body;

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuOverlay = document.querySelector(".menu-overlay");

    const submenuButtons =
        document.querySelectorAll(".submenu-toggle");

    /* ==========================================
       OPEN MENU
    ========================================== */

    function openMenu(){

        mobileMenu.classList.add("active");

        menuOverlay.classList.add("active");

        body.classList.add("menu-open");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

    }

    /* ==========================================
       CLOSE MENU
    ========================================== */

    function closeMenu(){

        mobileMenu.classList.remove("active");

        menuOverlay.classList.remove("active");

        body.classList.remove("menu-open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

    /* ==========================================
       TOGGLE MENU
    ========================================== */

    menuToggle?.addEventListener("click", () => {

        if(mobileMenu.classList.contains("active")){

            closeMenu();

        }else{

            openMenu();

        }

    });

    /* ==========================================
       OVERLAY
    ========================================== */

    menuOverlay?.addEventListener(
        "click",
        closeMenu
    );

    /* ==========================================
       ESC KEY
    ========================================== */

    document.addEventListener(
        "keydown",
        e => {

            if(e.key === "Escape"){

                closeMenu();

            }

        }
    );

    /* ==========================================
       CLOSE AFTER CLICK
    ========================================== */

    document
        .querySelectorAll(".mobile-menu a")
        .forEach(link => {

            link.addEventListener(
                "click",
                closeMenu
            );

        });

    /* ==========================================
       SUBMENU
    ========================================== */

    submenuButtons.forEach(button => {

        button.addEventListener("click", () => {

            const submenu =
                button.nextElementSibling;

            submenuButtons.forEach(other => {

                if(other !== button){

                    other.classList.remove("active");

                    other.nextElementSibling
                        ?.classList.remove("active");

                }

            });

            button.classList.toggle("active");

            submenu.classList.toggle("active");

        });

    });

    /* ==========================================
       STICKY HEADER
    ========================================== */

    const header =
        document.querySelector(".site-header");

    window.addEventListener(
        "scroll",
        () => {

            if(window.scrollY > 30){

                header.classList.add("scrolled");

            }else{

                header.classList.remove("scrolled");

            }

        },
        { passive:true }
    );

    /* ==========================================
       ACTIVE MENU
    ========================================== */

    const currentPage =
        window.location.pathname
        .split("/")
        .pop() || "index.html";

    document
        .querySelectorAll(".nav-menu a,.mobile-menu a")
        .forEach(link => {

            if(
                link.getAttribute("href") === currentPage
            ){

                link.classList.add("active");

            }

        });

});
