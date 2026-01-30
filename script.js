// Edit these to whatever you want:
const items = [
    "Portfolio Page",
    "Raise the Case",
    "Team Pulse",
    "Portfolio Page",
    "Raise the Case",
    "Team Pulse"
];

// Colors for each slice (same order as items)
const sliceColors = [
    "#AAC0E7",   // Portfolio
    "#1A2C3D",   // Raise the Case
    "gradient",  // Team Pulse (gradient handled below)
    "#AAC0E7",   // Portfolio
    "#1A2C3D",   // Raise the Case
    "gradient"   // Team Pulse (gradient handled below)
];

const wheelEl = document.getElementById("wheel");
const labelsEl = document.getElementById("labels");
const spinBtn = document.getElementById("spinBtn");
const resultEl = document.getElementById("result");

const n = items.length;
const slice = 360 / n;

// Build wheel background
// (no separators between slices)
const stops = [];
for (let i = 0; i < n; i++) {
    const start = i * slice;
    const end = (i + 1) * slice;

    // For Team Pulse segments (indices 2 and 5), create a gradient effect
    if (i === 2 || i === 5) {
        stops.push(`#FCE7C8 ${start}deg`);
        stops.push(`#dbeaf8 ${end}deg`);
    } else {
        stops.push(`${sliceColors[i]} ${start}deg ${end}deg`);
    }
}
wheelEl.style.background = `conic-gradient(${stops.join(",")})`;

// Place labels around the wheel
// We put each label at the middle angle of its slice, and push it outward.
const radius = 140;
labelsEl.innerHTML = "";

items.forEach((text, i) => {
    const mid = (i * slice) + (slice / 2);

    const label = document.createElement("div");
    label.className = "label";

    if (text === "Portfolio Page") label.classList.add("label-portfolio");
    if (text === "Raise the Case") label.classList.add("label-raise-case");
    if (text === "Team Pulse") label.classList.add("label-team-pulse");

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
    // Pointer is at top (0deg). Wheel rotation moves slices under pointer.
    // Normalize so 0..360, then find slice index.
    const normalized = ((rotDeg % 360) + 360) % 360;
    // We want the angle under the pointer after rotation:
    // When wheel rotates clockwise by normalized, the slice at angle (360 - normalized) is at pointer.
    const pointerAngle = (360 - normalized) % 360;
    const index = Math.floor(pointerAngle / slice) % n;
    return index;
}

spinBtn.addEventListener("click", () => {
    if (spinning) return;
    spinning = true;
    spinBtn.disabled = true;
    resultEl.textContent = "";

    // Choose a random target slice
    const targetIndex = Math.floor(Math.random() * n);

    // Choose a random angle within that slice (avoid borders a bit)
    const padding = 4; // degrees away from edges
    const within = padding + Math.random() * (slice - padding * 2);
    const targetAngle = (targetIndex * slice) + within;

    // We want targetAngle to end up at the pointer (top = 0deg).
    // That means the wheel's final rotation should be: 360 - targetAngle (plus extra spins)
    const extraSpins = 6 + Math.floor(Math.random() * 3); // 6-8 full spins
    const finalRotation = (extraSpins * 360) + (360 - targetAngle);

    currentRotation += finalRotation;

    wheelEl.style.transform = `rotate(${currentRotation}deg)`;
    labelsEl.style.transform = `rotate(${currentRotation}deg)`;
});

wheelEl.addEventListener("transitionend", () => {
    if (!spinning) return;

    // Determine winner from the final rotation
    const winnerIndex = pickWinnerByRotation(currentRotation);
    const winner = items[winnerIndex];

    // Show winner modal
    const modal = document.getElementById("winnerModal");
    const winnerText = document.getElementById("winnerText");
    const projectLink = document.getElementById("projectLink");
    
    winnerText.textContent = `You're visiting: ${winner}`;
    
    // Set project links (update these with actual URLs)
    const projectLinks = {
        "Portfolio Page": "https://blossom-4.github.io/",
        "Raise the Case": "https://raise-the-case.netlify.app/",
        "Team Pulse": "https://teampulse-app.netlify.app/"
    };
    
    projectLink.href = projectLinks[winner] || "#";
    modal.classList.add("show");
    
    resultEl.textContent = `Winner: ${winner}`;
    spinning = false;
    spinBtn.disabled = false;
});

// Close modal when clicking outside of it
const modal = document.getElementById("winnerModal");
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});
