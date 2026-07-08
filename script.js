/*=====================================================
                PREMIUM LANDING PAGE
                PART 1
=====================================================*/


// =======================================
// Mouse Glow
// =======================================

const glow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});



// =======================================
// Hero Typewriter
// =======================================

const heroTyping = document.getElementById("typing-role");

if(heroTyping){

const heroWords = [

"📈 Trader",

"🤖 AI Enthusiast",

"💻 Programmer",

"🚀 Building The Future",

"⚡ Creating Intelligent Systems"

];

let wordIndex = 0;

let letterIndex = 0;

let deleting = false;

function heroType(){

const currentWord = heroWords[wordIndex];

if(!deleting){

heroTyping.textContent =

currentWord.substring(0,letterIndex++);

if(letterIndex > currentWord.length){

deleting = true;

setTimeout(heroType,1800);

return;

}

}else{

heroTyping.textContent =

currentWord.substring(0,letterIndex--);

if(letterIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >= heroWords.length){

wordIndex = 0;

}

}

}

setTimeout(heroType,deleting ? 40 : 85);

}

heroType();

}



// =======================================
// Journey Terminal Typewriter
// =======================================

const terminal =

document.getElementById("terminal-text");

if(terminal){

const terminalWords = [

"> Initializing AI Systems...",

"> Connecting Trading Models...",

"> Building Portfolio...",

"> Deploying Future Projects...",

"> Launching Soon..."

];

let terminalWord = 0;

let terminalLetter = 0;

let terminalDelete = false;

function terminalType(){

const current = terminalWords[terminalWord];

if(!terminalDelete){

terminal.textContent =

current.substring(0,terminalLetter++);

if(terminalLetter > current.length){

terminalDelete = true;

setTimeout(terminalType,2000);

return;

}

}else{

terminal.textContent =

current.substring(0,terminalLetter--);

if(terminalLetter < 0){

terminalDelete = false;

terminalWord++;

if(terminalWord >= terminalWords.length){

terminalWord = 0;

}

}

}

setTimeout(terminalType,

terminalDelete ? 25 : 60);

}

terminalType();

}



// =======================================
// Hero Parallax
// =======================================

const auroras =

document.querySelectorAll(".aurora");

document.addEventListener("mousemove",(e)=>{

const x =

(e.clientX/window.innerWidth)-0.5;

const y =

(e.clientY/window.innerHeight)-0.5;

auroras.forEach((orb,index)=>{

const speed = (index+1)*18;

orb.style.transform =

`translate(

${x*speed}px,

${y*speed}px

)`;

});

});



// =======================================
// Reveal Animation
// =======================================

const reveals =

document.querySelectorAll(

".hero-content,.glass-card,.contact"

);

const observer =

new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.2

});

reveals.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});



// =======================================
// Intro Fade
// =======================================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

/*=====================================================
                PREMIUM LANDING PAGE
                PART 2
=====================================================*/



// =======================================
// Floating Particles
// =======================================

const stars = document.querySelector(".stars");

if(stars){

for(let i=0;i<80;i++){

const particle=document.createElement("span");

particle.className="particle";

particle.style.left=Math.random()*100+"%";

particle.style.top=Math.random()*100+"%";

particle.style.animationDelay=Math.random()*6+"s";

particle.style.animationDuration=
4+Math.random()*8+"s";

particle.style.opacity=Math.random();

stars.appendChild(particle);

}

}



// =======================================
// Particle Animation
// =======================================

document.querySelectorAll(".particle").forEach(p=>{

setInterval(()=>{

p.style.transform=

`translateY(${-80-Math.random()*80}px)`;

},3000+Math.random()*3000);

});



// =======================================
// Shooting Stars
// =======================================

function createStar(){

const star=document.createElement("div");

star.className="shooting-star";

star.style.top=Math.random()*40+"%";

star.style.left="-200px";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},7000);

}

setInterval(createStar,7000);



// =======================================
// Sparkles
// =======================================

function sparkle(){

const hero=document.querySelector(".hero");

if(!hero) return;

const dot=document.createElement("div");

dot.className="sparkle";

dot.style.left=Math.random()*100+"%";

dot.style.top=Math.random()*100+"%";

hero.appendChild(dot);

setTimeout(()=>{

dot.remove();

},2200);

}

setInterval(sparkle,900);



// =======================================
// Floating Icons
// =======================================

const icons=

document.querySelectorAll(".float-icon");

icons.forEach((icon,index)=>{

let angle=Math.random()*360;

setInterval(()=>{

angle+=0.4;

icon.style.transform=

`translateY(

${Math.sin(angle*Math.PI/180)*12}px

)

rotate(

${Math.cos(angle*Math.PI/180)*8}deg

)`;

},25);

});



// =======================================
// Mobile Menu
// =======================================

const nav=document.querySelector(".nav-content");

const navLinks=document.querySelector(".nav-links");

const menu=document.createElement("button");

menu.className="mobile-menu-btn";

menu.innerHTML='<i class="fas fa-bars"></i>';

function checkMenu(){

if(window.innerWidth<=768){

if(!document.querySelector(".mobile-menu-btn")){

nav.appendChild(menu);

}

}else{

if(document.querySelector(".mobile-menu-btn")){

menu.remove();

}

navLinks.classList.remove("active");

}

}

checkMenu();

window.addEventListener("resize",checkMenu);

menu.addEventListener("click",()=>{

navLinks.classList.toggle("active");

const icon=menu.querySelector("i");

icon.classList.toggle("fa-bars");

icon.classList.toggle("fa-times");

});



// =======================================
// Close Menu
// =======================================

document.querySelectorAll(".nav-links a")

.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});



// =======================================
// Scroll Indicator
// =======================================

window.addEventListener("scroll",()=>{

const scroll=document.querySelector(".scroll-down");

if(!scroll) return;

if(window.scrollY>150){

scroll.style.opacity="0";

}else{

scroll.style.opacity="1";

}

});



// =======================================
// Floating Glow
// =======================================

const background=document.querySelector(".background");

setInterval(()=>{

const glow=document.createElement("div");

glow.className="ambient-glow";

glow.style.left=Math.random()*100+"%";

glow.style.top=Math.random()*100+"%";

background.appendChild(glow);

setTimeout(()=>{

glow.remove();

},8000);

},2500);



// =======================================
// Hero Buttons Hover
// =======================================

document.querySelectorAll(".btn")

.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});

/*=====================================================
            FORM & FINAL INTERACTIONS
=====================================================*/


// =======================================
// Formspree Contact Form
// =======================================

// =======================================
// Premium Contact Form
// =======================================

const contactForm = document.getElementById("contact-form");

if(contactForm){

    const submitBtn = contactForm.querySelector(".contact-btn");
    const status = document.getElementById("form-status");
    const btnText = submitBtn.querySelector("span");
    const btnIcon = submitBtn.querySelector("i");

    contactForm.addEventListener("submit", async function(e){

        e.preventDefault();

        status.textContent = "";
        status.className = "";

        submitBtn.disabled = true;

        btnText.textContent = "Sending...";
        btnIcon.className = "fas fa-spinner fa-spin";

        try{

            const response = await fetch(contactForm.action,{

                method:"POST",

                body:new FormData(contactForm),

                headers:{
                    "Accept":"application/json"
                }

            });

            if(response.ok){

                status.textContent =
                "✅ Message sent successfully!";

                status.className="success";

                btnText.textContent="Sent";

                btnIcon.className="fas fa-check";

                contactForm.reset();

                setTimeout(()=>{

                    btnText.textContent="Send Message";
                    btnIcon.className="fas fa-paper-plane";

                    submitBtn.disabled=false;

                },2500);

            }else{

                throw new Error();

            }

        }catch{

            status.textContent =
            "❌ Failed to send your message. Please try again.";

            status.className="error";

            btnText.textContent="Try Again";
            btnIcon.className="fas fa-paper-plane";

            submitBtn.disabled=false;

        }

    });

}

// =======================================
// Input Glow Animation
// =======================================

document.querySelectorAll(".form-input, .form-textarea")

.forEach(input=>{

    input.addEventListener("focus",()=>{

        input.parentElement.style.transform="translateY(-3px)";

    });

    input.addEventListener("blur",()=>{

        input.parentElement.style.transform="translateY(0px)";

    });

});



// =======================================
// Navbar Active Link
// =======================================

const sections=

document.querySelectorAll("section");

const navItems=

document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=

section.offsetTop-120;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(

link.getAttribute("href")==="#"+current

){

link.classList.add("active");

}

});

});



// =======================================
// Smooth Navigation
// =======================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if(!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});



// =======================================
// Footer Year
// =======================================

const year=

document.getElementById("year");

if(year){

year.textContent=

new Date().getFullYear();

}



// =======================================
// Console Welcome
// =======================================

console.log(

"%cWelcome to Youssef's Portfolio 🚀",

"color:#8b5cf6;font-size:18px;font-weight:bold;"

);

console.log(

"%cDesigned with ❤️ using HTML, CSS & JavaScript",

"color:#94a3b8;font-size:14px;"

);



// =======================================
// Finished Loading
// =======================================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});