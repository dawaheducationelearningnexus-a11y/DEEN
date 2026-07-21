/* ==========================================================
   DEEN ADMIN DASHBOARD
   CHART.JS
   VERSION 1.0
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    Chart.defaults.font.family = "Inter";

    Chart.defaults.color = "#64748B";

    Chart.defaults.plugins.legend.display = false;

    /* ==========================================
       STUDENT GROWTH
    ========================================== */

    new Chart(document.getElementById("studentChart"), {

        type: "line",

        data: {

            labels: [
                "Jan","Feb","Mar","Apr","May","Jun",
                "Jul","Aug","Sep","Oct","Nov","Dec"
            ],

            datasets: [{

                data: [
                    120,
                    180,
                    240,
                    310,
                    390,
                    470,
                    560,
                    640,
                    720,
                    810,
                    920,
                    1050
                ],

                borderColor: "#14B8A6",

                backgroundColor: "rgba(20,184,166,.15)",

                fill: true,

                tension: .45

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false

        }

    });

    /* ==========================================
       REVENUE
    ========================================== */

    new Chart(document.getElementById("revenueChart"), {

        type: "bar",

        data: {

            labels: [
                "Jan","Feb","Mar","Apr","May","Jun"
            ],

            datasets: [{

                data: [

                    4500,
                    5200,
                    6800,
                    7400,
                    8100,
                    9500

                ],

                backgroundColor: [

                    "#0F766E",
                    "#14B8A6",
                    "#D4AF37",
                    "#0EA5E9",
                    "#22C55E",
                    "#6366F1"

                ]

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false

        }

    });

    /* ==========================================
       COURSE ENROLLMENT
    ========================================== */

    new Chart(document.getElementById("courseChart"), {

        type: "doughnut",

        data: {

            labels: [

                "Quran",
                "Hadith",
                "Arabic",
                "English",
                "Technology"

            ],

            datasets: [{

                data: [

                    42,
                    18,
                    15,
                    12,
                    13

                ],

                backgroundColor: [

                    "#0F766E",
                    "#14B8A6",
                    "#D4AF37",
                    "#0EA5E9",
                    "#8B5CF6"

                ]

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false

        }

    });

    /* ==========================================
       MONTHLY PERFORMANCE
    ========================================== */

    new Chart(document.getElementById("performanceChart"), {

        type: "radar",

        data: {

            labels: [

                "Teaching",
                "Attendance",
                "Research",
                "Dawah",
                "Technology",
                "Management"

            ],

            datasets: [{

                data: [

                    92,
                    88,
                    84,
                    90,
                    95,
                    87

                ],

                borderColor: "#0F766E",

                backgroundColor: "rgba(15,118,110,.18)"

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false

        }

    });

});
