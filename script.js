// COUNTDOWN
const launchDate = new Date("June 30, 2025 09:00:00").getTime();

const updateCountdown = setInterval(() => {
    const currentTime = new Date().getTime();
    const timeLeft = launchDate - currentTime;

    const d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const h = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;

    if (timeLeft < 0) {
        clearInterval(updateCountdown);
        document.getElementById("timer").textContent = "Event Started!";
    }
}, 1000);

// REGISTRATION FORM SUBMIT WITH MAGIC SOUND
const regForm = document.getElementById("registration-form");
const regMessage = document.getElementById("registration-success");
const magicSound = document.getElementById("magic-sound");

regForm.addEventListener("submit", function (e) {
    e.preventDefault();
    regMessage.textContent = "✨ Thank you for registering with magic!";
    regForm.reset();
    if (magicSound) magicSound.play();
});

// DARK/LIGHT MODE TOGGLE
const modeSwitch = document.getElementById("toggle-mode");

modeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// SPARKLING PARTICLE BACKGROUND (Canvas)
const canvas = document.getElementById('sparkle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        d: Math.random() * 1.5
    });
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.beginPath();
    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    updateParticles();
}

function updateParticles() {
    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.y -= p.d;
        if (p.y < 0) {
            p.y = canvas.height;
            p.x = Math.random() * canvas.width;
        }
    }
}

setInterval(drawParticles, 33);

// FLYING STARS MAGIC EFFECT
setInterval(() => {
    const star = document.createElement("div");
    star.className = "flying-star";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = window.innerHeight + "px";
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 5000);
}, 1000);

// CUSTOM MAGIC WAND CURSOR (ensure magic-wand.png is in your project folder)
document.body.style.cursor = "url('magic-wand.png'), auto";
