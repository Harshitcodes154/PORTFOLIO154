// ================================
// Harshit Kumar Portfolio
// script.js
// ================================

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

// Typing Animation

const typing = document.getElementById("typing");

const words = [
    "AI Engineer",
    "Machine Learning Engineer",
    "Deep Learning Enthusiast",
    "Computer Vision Developer",
    "Generative AI Developer",
    "Full Stack AI Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 45 : 90);

}

typeEffect();

// Scroll Progress

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

});

// Back To Top

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// Reveal Animation

const reveals = document.querySelectorAll(
    ".card,.skill,.project-card,.timeline-item"
);

function reveal() {

    const trigger = window.innerHeight - 120;

    reveals.forEach((element) => {

        const top = element.getBoundingClientRect().top;

        if (top < trigger) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0px)";

        }

    });

}

reveals.forEach((el) => {

    el.style.opacity = "0";

    el.style.transform = "translateY(50px)";

    el.style.transition = "0.8s";

});

window.addEventListener("scroll", reveal);

reveal();

// Navbar Background

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background =
            "rgba(5,8,22,.85)";

    } else {

        header.style.background =
            "rgba(5,8,22,.55)";

    }

});

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector("nav ul");

menuBtn.onclick = () => {

    if (navMenu.style.display === "flex") {

        navMenu.style.display = "none";

    } else {

        navMenu.style.display = "flex";

        navMenu.style.flexDirection = "column";

        navMenu.style.position = "absolute";

        navMenu.style.right = "20px";

        navMenu.style.top = "80px";

        navMenu.style.background = "#111827";

        navMenu.style.padding = "20px";

        navMenu.style.borderRadius = "12px";

    }

};

// Card Hover Effect

const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 16;

        const rotateX = -(y / rect.height - 0.5) * 16;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0deg) rotateY(0deg)";

    });

});

// Contact Form

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert(
        "Thank you! Your message has been received."
    );

    form.reset();

});

// Smooth Active Navigation

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});

// Floating Animation

document.querySelectorAll(".profile-card,.card")
.forEach((item, index) => {

    item.animate(

        [

            { transform: "translateY(0px)" },

            { transform: "translateY(-10px)" },

            { transform: "translateY(0px)" }

        ],

        {

            duration: 4000 + index * 500,

            iterations: Infinity

        }

    );

});
