// ==================== MOBILE MENU ====================

const navLinks = document.querySelector(".nav-links");
const navContent = document.querySelector(".nav-content");

// Create hamburger button
const menuBtn = document.createElement("button");
menuBtn.className = "mobile-menu-btn";
menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

// Add button only on mobile
function checkMobileMenu() {

    if (window.innerWidth <= 768) {

        if (!document.querySelector(".mobile-menu-btn")) {
            navContent.appendChild(menuBtn);
        }

    } else {

        if (document.querySelector(".mobile-menu-btn")) {
            menuBtn.remove();
        }

        navLinks.classList.remove("active");
    }
}

checkMobileMenu();

window.addEventListener("resize", checkMobileMenu);

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");

});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu after clicking
            if (navLinks) navLinks.classList.remove('active');
        }
    });
});

// ==================== CONTACT FORM ====================

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        const button = form.querySelector("button");
        const originalText = button.innerHTML;

        // Validate only required fields
        const fields = form.querySelectorAll(
            "input[required], textarea[required]"
        );

        let isValid = true;

        fields.forEach(field => {

            if (!field.value.trim()) {

                field.style.border = "1px solid #ef4444";
                isValid = false;

            } else {

                field.style.border = "1px solid #334155";

            }

        });

        if (!isValid) {

            alert("Please fill in all fields!");
            return;

        }

        // Loading

        button.disabled = true;

        button.innerHTML =
            `Sending... <i class="fas fa-spinner fa-spin"></i>`;

        try {

            const response = await fetch(form.action, {

                method: "POST",

                body: new FormData(form),

                headers: {

                    Accept: "application/json"

                }

            });

            if (response.ok) {

                button.innerHTML =
                    `Message Sent! <i class="fas fa-check"></i>`;

                button.style.background = "#16a34a";

                form.reset();

                showToast("✅ Thank you! Your message has been sent.");

            } else {

                throw new Error("Formspree Error");

            }

        }

        catch (error) {

            button.innerHTML =
                `Send Failed <i class="fas fa-times"></i>`;

            button.style.background = "#dc2626";

            showToast("❌ Something went wrong. Please try again.");

        }

        setTimeout(() => {

            button.disabled = false;

            button.style.background = "";

            button.innerHTML = originalText;

        }, 2500);

    });

}
// Toast notification function
function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 25px;
        left: 50%;
        transform: translateX(-50%);
        background: #1e2937;
        color: white;
        padding: 14px 24px;
        border-radius: 9999px;
        border: 1px solid #334155;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 10px 15px rgb(15 23 42 / 0.3);
        z-index: 1000;
    `;
    toast.innerHTML = `
        <i class="fas fa-check-circle" style="color: #34d399;"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.transition = 'all 0.3s ease';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==================== PROJECT MODAL ====================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.style.cursor = 'pointer';
    
    card.addEventListener('click', () => {
        const title = card.querySelector('.project-title').textContent;
        const desc = card.querySelector('.project-desc').textContent;
        
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(15, 23, 42, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
        `;
        
        modal.innerHTML = `
            <div style="background: #1e2937; border-radius: 20px; max-width: 600px; width: 90%; padding: 2rem; position: relative;">
                <button style="position: absolute; top: 15px; right: 20px; background: none; border: none; color: #64748b; font-size: 1.5rem; cursor: pointer;">×</button>
                <h2 style="font-size: 2rem; margin-bottom: 1rem;">${title}</h2>
                <p style="color: #94a3b8; line-height: 1.7;">${desc}</p>
                
                <div style="margin-top: 2rem;">
                    <button class="btn btn-primary" style="padding: 12px 28px;">View Live Project</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal
        modal.querySelector('button').addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    });
});

// ==================== COPY EMAIL (Optional) ====================
console.log('%c[Portfolio] JavaScript loaded successfully!', 'color:#64748b');

/*==================================================
            STAY TUNED ANIMATIONS
==================================================*/

// ================= Typing Effect =================

const typingElement = document.getElementById("typing-text");

if (typingElement) {

    const words = [

        "Building AI Experiences...",
        "Designing Modern Websites...",
        "Creating Future Projects...",
        "Learning. Building. Growing.",
        "Launching Something Extraordinary..."

    ];

    let wordIndex = 0;
    let letterIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, letterIndex++);

            if (letterIndex > currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1800);

                return;

            }

        } else {

            typingElement.textContent =
                currentWord.substring(0, letterIndex--);

            if (letterIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length)
                    wordIndex = 0;

            }

        }

        setTimeout(typeEffect, deleting ? 35 : 80);

    }

    typeEffect();

}

// ================= Mouse Glow =================

const section = document.querySelector(".coming-soon");

if(section){

const glow = document.createElement("div");

glow.style.cssText=`

position:absolute;

width:350px;

height:350px;

border-radius:50%;

pointer-events:none;

background:radial-gradient(circle,
rgba(139,92,246,.28),
transparent 70%);

filter:blur(25px);

transform:translate(-50%,-50%);

transition:
left .12s linear,
top .12s linear;

z-index:1;

`;

section.appendChild(glow);

section.addEventListener("mousemove",(e)=>{

const rect=section.getBoundingClientRect();

glow.style.left=e.clientX-rect.left+"px";

glow.style.top=e.clientY-rect.top+"px";

});

}

// ================= Twinkling Stars =================

if(section){

for(let i=0;i<60;i++){

const star=document.createElement("span");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*5+"s";

star.style.animationDuration=(2+Math.random()*4)+"s";

section.appendChild(star);

}

}

// ================= Scroll Reveal =================

const revealItems=document.querySelectorAll(

".coming-label,.coming-title,.coming-text,.typing-wrapper,.loader,.coming-footer"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(50px)";

item.style.transition="all 1s ease";

observer.observe(item);

});

// ================= Floating Animation =================

const orbs=document.querySelectorAll(".floating-orb");

orbs.forEach((orb,index)=>{

let angle=Math.random()*360;

setInterval(()=>{

angle+=0.4+(index*0.08);

orb.style.transform=

`translate(
${Math.sin(angle*Math.PI/180)*20}px,
${Math.cos(angle*Math.PI/180)*20}px)`;

},25);

});