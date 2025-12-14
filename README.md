# Ecosystem Service and Geospatial AI Lab Website

A modern, front-end only website for the Ecosystem Service and Geospatial Artificial Intelligence (GeoAI) Lab at the University of Florida.

## Features

- 🎨 **Modern Design**: Clean, professional design with geospatial/ecosystem theme
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- ✨ **Smooth Animations**: Engaging scroll animations and interactive elements
- 🚀 **Fast & Lightweight**: Pure HTML, CSS, and JavaScript - no frameworks required
- 🌍 **Theme-Fitting**: Color scheme and design elements inspired by geospatial and ecosystem themes

## Getting Started

### Prerequisites

No prerequisites needed! This is a static website that runs entirely in the browser.

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! The website is ready to use.

### Local Development

For a better development experience, you can use a local server:

#### Using Python (if installed):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open `http://localhost:8000` in your browser.

#### Using Node.js (if installed):
```bash
npx http-server
```

#### Using VS Code:
Install the "Live Server" extension and click "Go Live" in the status bar.

## Project Structure

```
lab_website/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive features and animations
└── README.md          # This file
```

## Customization

### Updating Content

1. **Lab Information**: Edit the hero section and about section in `index.html`
2. **Research Areas**: Modify the research cards in the research section
3. **Team Members**: Update team member information in the team section
4. **Publications**: Add or modify publications in the publications section
5. **Contact Information**: Update contact details in the contact section

### Changing Colors

The color scheme is defined in CSS variables at the top of `styles.css`:

```css
:root {
    --primary-green: #2d8659;
    --primary-blue: #1e6fa5;
    --accent-teal: #3db5a0;
    /* ... more variables ... */
}
```

Modify these values to change the color scheme throughout the site.

### Adding Sections

To add a new section:

1. Add a new `<section>` in `index.html`
2. Add corresponding styles in `styles.css`
3. Add navigation link in the navbar
4. Update JavaScript if you need scroll animations for the new section

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Features Breakdown

### Navigation
- Fixed navbar with smooth scroll
- Mobile-responsive hamburger menu
- Active link highlighting based on scroll position

### Hero Section
- Animated background with grid overlay
- Particle effects
- Smooth fade-in animations

### About Section
- Animated statistics counter
- Visual card with rotating glow effect

### Research Section
- Hover effects on research cards
- Staggered scroll animations

### Team Section
- Team member cards with hover effects
- Social links

### Publications Section
- Publication list with hover effects
- Year indicators

### Contact Section
- Contact form (front-end only - needs backend for actual submission)
- Contact information cards

## Future Enhancements

To make this a fully functional website, consider:

- Adding a backend for the contact form
- Integrating with a CMS for easy content management
- Adding a blog section
- Implementing a publications database
- Adding a projects showcase
- Integrating with Google Scholar or ORCID for publications

## License

This template is created for the GeoAI Lab at the University of Florida.

## Credits

- Fonts: [Google Fonts](https://fonts.google.com/) - Inter & Space Grotesk
- Design: Custom design for GeoAI Lab

---

For questions or suggestions, please contact the lab at geoai-lab@ufl.edu


