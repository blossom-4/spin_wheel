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

- Smooth spinning animation
- Random project selection
- Project-specific styling (fonts and colors)
- Responsive popup modal
- Sparkly background with twinkling stars
- [ ] Uses semantic HTML.

### Bonus (optional)
 Add a short paragraph describing the features below, if you included any. 
- [ ] Different styles for active, hover and focus states.
- [ ] Include JavaScript to add some dynamic elements to your site. (Extra tricky!)
​
### Screenshots
> Please include the following:
> - The different pages and features of your website on mobile, tablet and desktop screen sizes (multiple screenshots per page and screen size).
> - The different features of your site, e.g. if you have hover states, take a screenshot that shows that.  
> 
> You can do this by saving the images in a folder in your repo, and including them in your readme document with the following Markdown code: 

####  image_title_goes_here 
![Put a description of your image here](./relative_path_to_file)
