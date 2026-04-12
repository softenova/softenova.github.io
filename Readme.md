# Softenova Limited

A modern, responsive business website for Softenova Limited, showcasing software solutions and services.

## 🚀 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Bootstrap 5.3
- **Libraries**:
  - AOS (Animate On Scroll)
  - Swiper (Carousels/Sliders)
  - GLightbox (Lightbox gallery)
  - GSAP (Animations)
  - Isotope (Filtering/Masonry layout)
  - PureCounter (Animated counters)
- **Icons**: Bootstrap Icons
- **Fonts**: Google Fonts (Inter)
- **Deployment**: GitHub Pages
- **Domain**: Custom domain (softenova.com)

## 🎨 Brand Guidelines

- **Primary Color**: `#08b89d` (Teal)
- **Secondary Color**: `#078b78` (Dark Teal)
- **Typography**: Inter (Google Fonts)

## 📁 Project Structure

```
softenova/
├── index.html                 # Homepage
├── careers.html              # Careers page
├── privacy-policy.html       # Privacy policy page
├── terms-and-conditions.html # Terms and conditions page
├── CNAME                     # Custom domain configuration
├── .gitignore               # Git ignore rules
├── assets/
│   ├── css/
│   │   └── style.css        # Main stylesheet
│   ├── js/
│   │   ├── custom.js        # Main JavaScript
│   │   ├── send_email.js    # Email functionality
│   │   └── send_message.js  # Message functionality
│   ├── images/              # All images and media
│   └── vendors/             # Third-party libraries
└── README.md                # This file
```

## 🛠️ Getting Started

### Prerequisites
- Git
- Modern web browser
- Code editor (VS Code recommended)
- GitHub account

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/softenova/softenova.github.io.git
   cd softenova
   ```

2. **Open in browser**
   - Open `index.html` in your browser
   - For live reload during development, use a local server:
     ```bash
     # Using Python
     python -m http.server 8000

     # Using Node.js (if available)
     npx serve .
     ```

3. **Make changes**
   - Edit HTML, CSS, or JS files
   - Test in browser
   - Commit changes

## 📄 Creating New Pages

### Step-by-Step Guide

1. **Create HTML file**
   ```bash
   # Copy from existing page as template
   cp index.html new-page.html
   ```

2. **Update page content**
   - Change `<title>` tag
   - Update meta description
   - Modify content sections
   - Update navigation links if needed

3. **Add to navigation** (if applicable)
   - Update navbar in all HTML files
   - Add navigation links pointing to new page

4. **Test the page**
   - Open in browser
   - Check responsive design
   - Verify all links work
   - Test forms and interactions

5. **Add to sitemap** (optional)
   - Consider SEO implications
   - Update any sitemap.xml if exists

### Page Template Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Page Title - Softenova Limited</title>
  <meta name="description" content="Page description for SEO">

  <!-- Stylesheets (same as index.html) -->
  <link href="assets/vendors/bootstrap/bootstrap.min.css" rel="stylesheet">
  <!-- ... other vendor styles ... -->
  <link href="assets/css/style.css" rel="stylesheet">
</head>
<body>
  <!-- Header/Navbar -->
  <!-- Main Content -->
  <!-- Footer -->

  <!-- Scripts (same as index.html) -->
  <script src="assets/vendors/bootstrap/bootstrap.bundle.min.js"></script>
  <!-- ... other vendor scripts ... -->
  <script src="assets/js/custom.js"></script>
</body>
</html>
```

## 🔧 Development Workflow

### Feature Branches

1. **Create feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes**
   - Implement your feature
   - Test thoroughly
   - Follow coding standards

3. **Commit changes**
   ```bash
   git add .
   git commit -m "Add: descriptive commit message"
   ```

4. **Push branch**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request**
   - Go to GitHub repository
   - Create PR from your feature branch
   - Add description and screenshots
   - Request review

### Bug Fixing

1. **Identify the bug**
   - Reproduce the issue
   - Check browser console for errors
   - Test on different devices/browsers

2. **Create bug branch**
   ```bash
   git checkout -b bugfix/issue-description
   ```

3. **Debug and fix**
   - Use browser dev tools
   - Check for JavaScript errors
   - Verify CSS issues
   - Test responsive design

4. **Test the fix**
   - Verify bug is resolved
   - Test edge cases
   - Check cross-browser compatibility

5. **Commit and PR**
   ```bash
   git add .
   git commit -m "Fix: detailed description of the fix"
   git push origin bugfix/issue-description
   ```

## 🚀 Deployment

The site is automatically deployed via GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment Steps

1. **Commit changes**
   ```bash
   git add .
   git commit -m "Deploy: description of changes"
   ```

2. **Push to main**
   ```bash
   git push origin main
   ```

3. **GitHub Pages will automatically deploy**
   - Usually takes 1-2 minutes
   - Check deployment status in repository Settings > Pages

### Custom Domain

- Domain: `softenova.com`
- Configuration: `CNAME` file in root
- DNS: Pointed to GitHub Pages servers

## 📝 Coding Standards

### HTML
- Use semantic HTML5 elements
- Maintain consistent indentation
- Add alt text to images
- Use descriptive class names

### CSS
- Follow BEM methodology when possible
- Use CSS custom properties for colors
- Maintain responsive design principles
- Comment complex styles

### JavaScript
- Use modern ES6+ syntax
- Add comments for complex logic
- Follow consistent naming conventions
- Test functionality across browsers

## 🐛 Common Issues & Solutions

### Page Not Loading Styles/Scripts
- Check file paths are correct
- Verify files exist in assets folder
- Check browser console for 404 errors

### Responsive Design Issues
- Test on multiple screen sizes
- Use browser dev tools device emulation
- Check Bootstrap breakpoints

### Form Not Working
- Verify EmailJS configuration
- Check form field names match JavaScript
- Test email delivery

### Animation Not Working
- Ensure AOS library is loaded
- Check data-aos attributes are correct
- Verify element visibility

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Pull Request Guidelines
- Provide clear description of changes
- Include screenshots for UI changes
- Test on multiple browsers/devices
- Ensure no console errors

## 📞 Support

- **Email**: info@softenova.com
- **Website**: https://softenova.com
- **GitHub Issues**: For bug reports and feature requests

## 📄 License

This project is proprietary software owned by Softenova Limited.

---

**Last Updated**: April 2026
**Maintained by**: Softenova Development Team