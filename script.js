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

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        100
    );

    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(
        container.clientWidth,
        container.clientHeight
    );

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    container.appendChild(renderer.domElement);

    /*==========================
      CINEMATIC LIGHTING
==========================*/

    const ambient = new THREE.AmbientLight(0xffffff,0.35);
    scene.add(ambient);

    // Main light
    const keyLight = new THREE.DirectionalLight(0xffffff,4);
    keyLight.position.set(4,5,6);
    scene.add(keyLight);

    // Rim light
    const rimLight = new THREE.DirectionalLight(0xffffff,2);
    rimLight.position.set(-6,2,-6);
    scene.add(rimLight);

    // Bottom fill
    const fillLight = new THREE.PointLight(0xffffff,2);
    fillLight.position.set(0,-4,3);
    scene.add(fillLight);

    // Sphere
    const geometry = new THREE.SphereGeometry(1, 128, 128);

    const material = new THREE.MeshPhysicalMaterial({

    color:0x050505,

    metalness:1,

    roughness:0.05,

    clearcoat:1,

    clearcoatRoughness:0,

    transmission:0.15,

    ior:2.3,

    reflectivity:1

});

    const sphere = new THREE.Mesh(
        geometry,
        material
    );

    scene.add(sphere);

    /*==========================
      INNER CORE
    ==========================*/

    const core = new THREE.Mesh(

        new THREE.SphereGeometry(.42,64,64),

        new THREE.MeshBasicMaterial({

            color:0xffffff

        })

    );

sphere.add(core);

/*==========================
        PARTICLES
==========================*/

const particleCount = 1500;

const positions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount; i++) {

    const radius = 2.8 + Math.random() * 1.2;

    const theta = Math.random() * Math.PI * 2;

    const phi = Math.acos(2 * Math.random() - 1);

    positions[i * 3] =
        radius * Math.sin(phi) * Math.cos(theta);

    positions[i * 3 + 1] =
        radius * Math.sin(phi) * Math.sin(theta);

    positions[i * 3 + 2] =
        radius * Math.cos(phi);

}

const particleGeometry = new THREE.BufferGeometry();

particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
);

const particleMaterial = new THREE.PointsMaterial({

    color:0xffffff,

    size:0.018,

    transparent:true,

    opacity:0.7,

    depthWrite:false

});

const particles = new THREE.Points(

    particleGeometry,

    particleMaterial

);

scene.add(particles);

    /*==========================
        ORBIT RINGS
==========================*/

const ringMaterial = new THREE.MeshStandardMaterial({

    color:0xffffff,

    metalness:1,

    roughness:.2,

    transparent:true,

    opacity:.28

});

const ring1 = new THREE.Mesh(

    new THREE.TorusGeometry(1.55,.015,32,220),

    ringMaterial

);

ring1.rotation.x=Math.PI/2;

scene.add(ring1);


const ring2 = new THREE.Mesh(

    new THREE.TorusGeometry(1.8,.015,32,220),

    ringMaterial

);

ring2.rotation.y=Math.PI/3;

ring2.rotation.x=.5;

scene.add(ring2);


const ring3 = new THREE.Mesh(

    new THREE.TorusGeometry(2.05,.012,32,220),

    ringMaterial

);

ring3.rotation.z=Math.PI/4;

scene.add(ring3);

    // Animation
    function animate() {

        particles.rotation.y += 0.0008;

        particles.rotation.x += 0.0002;

        particles.rotation.z -= 0.0004;

        requestAnimationFrame(animate);

        sphere.rotation.y += 0.004;
        const t = Date.now()*0.001;

        core.scale.setScalar(

        0.9 + Math.sin(t*3)*0.08

        );
        ring1.rotation.z += .003;

        ring2.rotation.x += .002;

        ring3.rotation.y -= .0015;
        sphere.rotation.x += 0.001;

        sphere.position.y = Math.sin(Date.now() * 0.0015) * 0.15;

        renderer.render(scene, camera);

    }

    animate();

    // Resize
    window.addEventListener("resize", () => {

        camera.aspect =
            container.clientWidth /
            container.clientHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            container.clientWidth,
            container.clientHeight
        );

    });

}



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