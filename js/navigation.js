/* ==========================================================
   DEEN PREMIUM NAVIGATION
   VERSION 3.0
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuOverlay = document.querySelector(".menu-overlay");
    const body = document.body;

    /* ==========================================
       OPEN MENU
    ========================================== */

    function openMenu() {

        mobileMenu.classList.add("active");
        menuOverlay.classList.add("active");
        body.classList.add("menu-open");

    }

    /* ==========================================
       CLOSE MENU
    ========================================== */

    function closeMenu() {

        mobileMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
        body.classList.remove("menu-open");

    }

    /* ==========================================
       TOGGLE MENU
    ========================================== */

    menuToggle?.addEventListener("click", () => {

        if (mobileMenu.classList.contains("active")) {

            closeMenu();

        } else {

            openMenu();

        }

    });

    /* ==========================================
       OVERLAY CLOSE
    ========================================== */

    menuOverlay?.addEventListener("click", closeMenu);

});

/* ==========================================
   MOBILE SUBMENU
========================================== */

const submenuButtons = document.querySelectorAll(".submenu-toggle");

submenuButtons.forEach(button => {

    button.addEventListener("click", () => {

        const submenu = button.nextElementSibling;

        /* Close Other Submenus */

        submenuButtons.forEach(otherButton => {

            if (otherButton !== button) {

                otherButton.classList.remove("active");

                otherButton.nextElementSibling?.classList.remove("active");

            }

        });

        /* Toggle Current */

        button.classList.toggle("active");

        submenu?.classList.toggle("active");

    });

});

/* ==========================================
   ESC KEY CLOSE
========================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeMenu();

    }

});

/* ==========================================
   CLOSE WHEN LINK CLICKED
========================================== */

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        closeMenu();

    });

});

/* ==========================================
   OUTSIDE CLICK CLOSE
========================================== */

document.addEventListener("click", (event) => {

    if (

        mobileMenu.classList.contains("active") &&

        !mobileMenu.contains(event.target) &&

        !menuToggle.contains(event.target)

    ) {

        closeMenu();

    }

});
/* ==========================================
   STICKY HEADER SCROLL EFFECT
========================================== */

const header = document.querySelector(".site-header");

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 20) {

            header?.classList.add("scrolled");

        } else {

            header?.classList.remove("scrolled");

        }

    },
    { passive: true }
);

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-menu a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {

        link.classList.add("active");

    }

});

/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});

/* ==========================================
   ACCESSIBILITY
========================================== */

menuToggle?.setAttribute("aria-expanded", "false");

function updateMenuState(isOpen) {

    menuToggle?.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
    );

}

/* Update ARIA when menu opens/closes */

const originalOpenMenu = openMenu;
const originalCloseMenu = closeMenu;

openMenu = function () {

    originalOpenMenu();

    updateMenuState(true);

};

closeMenu = function () {

    originalCloseMenu();

    updateMenuState(false);

};

/* ==========================================
   END OF FILE
========================================== */

console.log("DEEN Navigation v3.0 Loaded Successfully");
