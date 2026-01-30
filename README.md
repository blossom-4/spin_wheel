# Spin Wheel Game

A simple interactive spin wheel game that allows users to spin and randomly select from three projects.

## What It Does

- Click the SPIN button to make the wheel spin
- The wheel randomly selects one of three projects
- A popup appears showing which project you're visiting
- Click the button in the popup to visit the project website

## Projects

The wheel features three projects:

1. **Portfolio Page** - Light blue segments
2. **Raise the Case** - Dark blue segments
3. **Team Pulse** - Gradient color segments

## How to Use

1. Open `index.html` in your web browser
2. Click the SPIN button
3. Wait for the wheel to stop spinning
4. Click the Visit Project button to go to the selected project

## Files

- `index.html` - Main HTML file
- `styles.css` - Styling and animations
- `script.js` - Wheel logic and interactions

## Customization

To update the project links, edit the `projectLinks` object in `script.js`:

```javascript
const projectLinks = {
        "Portfolio Page": "https://blossom-4.github.io/",
        "Raise the Case": "https://raise-the-case.netlify.app/",
        "Team Pulse": "https://teampulse-app.netlify.app/"
};
```

## Features

- Smooth spinning animation (4.2 seconds with easing)
- 6-8 full rotations before landing on winner for added excitement
- Random project selection from 6 segments
- Project-specific styling:
  - **Portfolio Page**: Sancreek font in #273C75 blue
  - **Raise the Case**: Source Sans 3 font in #C6A664 gold
  - **Team Pulse**: Cormorant Garamond font in #a8d8c4 teal with gradient background
- Winner announcement popup modal
- Direct links to project websites from modal button
- Click outside modal to close it
- Clean, minimalist design with light cream background (#F3F5F2)
- Responsive design using CSS min() and clamp() functions
- No separators between wheel segments for seamless appearance
