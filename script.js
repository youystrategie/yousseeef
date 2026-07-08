/* ===========================================
   Premium Portfolio
   script.js
=========================================== */

// ==========================
// Hero Typewriter
// ==========================


import * as THREE from "three";
/*====================================================
                AI CORE
====================================================*/

const container = document.getElementById("ai-core");

if (container) {

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(

        45,

        container.clientWidth / container.clientHeight,

        0.1,

        100

    );

    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({

        antialias: true,

        alpha: true

    });

    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.setSize(

        container.clientWidth,

        container.clientHeight

    );

    container.appendChild(renderer.domElement);
}

    const ambient = new THREE.AmbientLight(

        0xffffff,

        1.2

    );

    scene.add(ambient);

    const light = new THREE.DirectionalLight(

        0xffffff,

        2

    );

    light.position.set(5,5,5);

    scene.add(light);

    const backLight = new THREE.PointLight(

        0xffffff,

        1.5

    );

    backLight.position.set(-5,-5,-5);

    scene.add(backLight);
        const geometry = new THREE.SphereGeometry(

        1,

        128,

        128

    );

    const material = new THREE.MeshPhysicalMaterial({

        color:0x111111,

        metalness:.85,

        roughness:.15,

        transmission:.15,

        clearcoat:1,

        clearcoatRoughness:.05

    });

    const sphere = new THREE.Mesh(

        geometry,

        material

    );

    scene.add(sphere);


    
const typingElement = document.getElementById("typing-role");

if (typingElement) {

    const words = [
        "Trader",
        "AI Builder",
        "Python Developer",
        "Automation Enthusiast"
    ];

    let wordIndex = 0;
    let letterIndex = 0;
    let deleting = false;

    function type() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent = currentWord.substring(0, letterIndex++);
            
            if (letterIndex > currentWord.length) {
                deleting = true;
                setTimeout(type, 1500);
                return;
            }

        } else {

            typingElement.textContent = currentWord.substring(0, letterIndex--);

            if (letterIndex < 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }

        }

        setTimeout(type, deleting ? 40 : 90);
    }

    type();
}


// ==========================
// Scroll Reveal
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section, .profile-card, .glass-card, .contact-card")
.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


// ==========================
// Smooth Navigation
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});


// ==========================
// Active Navbar Link
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        if (window.scrollY >= section.offsetTop - 120) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================
// Contact Form
// ==========================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    const submitButton = contactForm.querySelector(".contact-btn");
    const status = document.getElementById("form-status");

    contactForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        submitButton.disabled = true;

        submitButton.textContent = "Sending...";

        status.textContent = "";

        try {

            const response = await fetch(contactForm.action, {

                method: "POST",

                body: new FormData(contactForm),

                headers: {

                    Accept: "application/json"

                }

            });

            if (response.ok) {

                status.textContent = "✓ Message sent successfully.";

                status.className = "success";

                contactForm.reset();

            } else {

                status.textContent = "Unable to send your message.";

                status.className = "error";

            }

        } catch {

            status.textContent = "Connection error.";

            status.className = "error";

        }

        submitButton.disabled = false;

        submitButton.innerHTML = `
            <span>Send Message</span>
            <i class="fas fa-paper-plane"></i>
        `;

    });

}


// ==========================
// Footer Year
// ==========================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

const terminal = document.getElementById("terminal-text");

if (terminal) {

    const messages = [
        "> Initializing...",
        "> Loading portfolio...",
        "> Connecting AI systems...",
        "> Ready."
    ];

    let message = 0;
    let letter = 0;
    let deleting = false;

    function typeTerminal() {

        const current = messages[message];

        if (!deleting) {

            terminal.textContent = current.substring(0, letter++);

            if (letter > current.length) {

                deleting = true;

                setTimeout(typeTerminal, 1200);

                return;
            }

        } else {

            terminal.textContent = current.substring(0, letter--);

            if (letter < 0) {

                deleting = false;

                message = (message + 1) % messages.length;

            }

        }

        setTimeout(typeTerminal, deleting ? 30 : 60);

    }

    typeTerminal();

}

/*======================================================
                    FOOTER
======================================================*/

// Footer Social Animation
const footerIcons = document.querySelectorAll(".footer-social a");

footerIcons.forEach(icon => {

    icon.addEventListener("mouseenter", () => {

        icon.animate([
            { transform: "translateY(0px) scale(1)" },
            { transform: "translateY(-5px) scale(1.08)" }
        ], {
            duration: 200,
            fill: "forwards",
            easing: "ease-out"
        });

    });

    icon.addEventListener("mouseleave", () => {

        icon.animate([
            { transform: "translateY(-5px) scale(1.08)" },
            { transform: "translateY(0px) scale(1)" }
        ], {
            duration: 200,
            fill: "forwards",
            easing: "ease-out"
        });

    });

});