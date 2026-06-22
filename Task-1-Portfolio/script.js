const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const roles = [
    "Frontend Developer",
    "JavaScript Enthusiast",
    "UI/UX Learner",
    "Web Designer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const typing = document.getElementById("typing");
    const currentRole = roles[roleIndex];

    if(!deleting){
        typing.textContent =
        currentRole.substring(0,charIndex++);
    }
    else{
        typing.textContent =
        currentRole.substring(0,charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if(!deleting && charIndex === currentRole.length + 1){
        deleting = true;
        speed = 1500;
    }

    if(deleting && charIndex === 0){
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect,speed);
}

typeEffect();
