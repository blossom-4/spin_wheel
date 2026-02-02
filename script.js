const items = [
    "BH",
    "RTC",
    "TP",
    "BH",
    "RTC",
    "TP"
];


document.addEventListener("DOMContentLoaded", () => {

const sliceColors = [
    "#AAC0E7",
    "#1A2C3D",
    "gradient",
    "#AAC0E7",
    "#1A2C3D",
    "gradient"
];

const wheelEl = document.getElementById("wheel");
const labelsEl = document.getElementById("labels");
const spinBtn = document.getElementById("spinBtn");

const n = items.length;
const slice = 360 / n;

const stops = [];
for (let i = 0; i < n; i++) {
    const start = i * slice;
    const end = (i + 1) * slice;

    if (i === 2 || i === 5) {
        stops.push(`#FCE7C8 ${start}deg`);
        stops.push(`#dbeaf8 ${end}deg`);
    } else {
        stops.push(`${sliceColors[i]} ${start}deg ${end}deg`);
    }
}
wheelEl.style.background = `conic-gradient(${stops.join(",")})`;

const radius = 140;
labelsEl.innerHTML = "";

items.forEach((text, i) => {
    const mid = (i * slice) + (slice / 2);

    const label = document.createElement("div");
    label.className = "label";

    if (text === "BH") label.classList.add("label-portfolio");
    if (text === "RTC") label.classList.add("label-raise-case");
    if (text === "TP") label.classList.add("label-team-pulse");

    label.textContent = text;

    const isBottom = mid > 180;

    label.style.transform = `
    rotate(${mid}deg)
    translate(0, ${-radius}px)
    rotate(${isBottom ? 180 : 0}deg)
    translate(-50%, 0)
 `;

    labelsEl.appendChild(label);
});

let currentRotation = 0;
let spinning = false;

function pickWinnerByRotation(rotDeg) {
    const normalized = ((rotDeg % 360) + 360) % 360;
    const pointerAngle = (360 - normalized) % 360;
    const index = Math.floor(pointerAngle / slice) % n;
    return index;
}

spinBtn.addEventListener("click", () => {
    if (spinning) return;
    spinning = true;
    spinBtn.disabled = true;


    const targetIndex = Math.floor(Math.random() * n);


    const padding = 4; 
    const within = padding + Math.random() * (slice - padding * 2);
    const targetAngle = (targetIndex * slice) + within;


    const extraSpins = 6 + Math.floor(Math.random() * 3); 
    const finalRotation = (extraSpins * 360) + (360 - targetAngle);

    currentRotation += finalRotation;

    wheelEl.style.transform = `rotate(${currentRotation}deg)`;
    labelsEl.style.transform = `rotate(${currentRotation}deg)`;
});

wheelEl.addEventListener("transitionend", () => {
    if (!spinning) return;


    const winnerIndex = pickWinnerByRotation(currentRotation);
    const winner = items[winnerIndex];


    const modal = document.getElementById("winnerModal");
    const winnerText = document.getElementById("winnerText");
    const projectLink = document.getElementById("projectLink");
    

    const fullNames = {
        "BH": "Portfolio Page",
        "RTC": "Raise the Case",
        "TP": "Team Pulse"
    };
    
    winnerText.textContent = `You're visiting: ${fullNames[winner]}`;
    
    const projectLinks = {
        "BH": "https://blossom-4.github.io/",
        "RTC": "https://raise-the-case.netlify.app/",
        "TP": "https://teampulse-app.netlify.app/"
    };
    
    projectLink.href = projectLinks[winner] || "#";
    modal.classList.add("show");
    
    spinning = false;
    spinBtn.disabled = false;
});

const modal = document.getElementById("winnerModal");
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});
});
