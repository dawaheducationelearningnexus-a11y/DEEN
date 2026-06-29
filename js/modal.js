/* ==========================================================
   DEEN Modal Framework
========================================================== */

"use strict";

/* ==========================================================
   Modal Engine
========================================================== */

function initModal() {

    const modalTriggers =
        document.querySelectorAll("[data-modal]");

    const closeButtons =
        document.querySelectorAll("[data-close-modal]");

    /* ---------- Open ---------- */

    modalTriggers.forEach(trigger => {

        trigger.addEventListener("click", () => {

            const id = trigger.dataset.modal;

            const modal = document.getElementById(id);

            if (!modal) return;

            modal.classList.add("active");

            document.body.classList.add("modal-open");

        });

    });

    /* ---------- Close Button ---------- */

    closeButtons.forEach(button => {

        button.addEventListener("click", () => {

            const modal = button.closest(".modal");

            modal?.classList.remove("active");

            document.body.classList.remove("modal-open");

        });

    });

    /* ---------- Overlay ---------- */

    document.querySelectorAll(".modal").forEach(modal => {

        modal.addEventListener("click", e => {

            if (e.target === modal) {

                modal.classList.remove("active");

                document.body.classList.remove("modal-open");

            }

        });

    });

    /* ---------- ESC ---------- */

    document.addEventListener("keydown", e => {

        if (e.key !== "Escape") return;

        document.querySelectorAll(".modal.active")

            .forEach(modal => {

                modal.classList.remove("active");

            });

        document.body.classList.remove("modal-open");

    });

}
