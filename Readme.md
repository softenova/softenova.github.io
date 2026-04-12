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
<!--
Template name: Nova
Template author: FreeBootstrap.net
Author website: https://freebootstrap.net/
License: https://freebootstrap.net/license
-->
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="assets/images/logo/softenova_favicon.png">
    <title> Softenova Limited </title>
     
    <!-- ======= Google Font =======-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&amp;display=swap" rel="stylesheet">
    <!-- End Google Font-->
    
    <!-- ======= Styles =======-->
    <link href="assets/vendors/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="assets/vendors/bootstrap-icons/font/bootstrap-icons.min.css" rel="stylesheet">
    <link href="assets/vendors/glightbox/glightbox.min.css" rel="stylesheet">
    <link href="assets/vendors/swiper/swiper-bundle.min.css" rel="stylesheet">
    <link href="assets/vendors/aos/aos.css" rel="stylesheet">
    <!-- End Styles-->
    
    <!-- ======= Theme Style =======-->
    <link href="assets/css/style.css" rel="stylesheet">
    <!-- End Theme Style-->
    
    <!-- ======= Apply theme =======-->
    <script>
      // Apply the theme as early as possible to avoid flicker
      (function() {
      const storedTheme = localStorage.getItem('theme') || 'light';
      document.documentElement.setAttribute('data-bs-theme', storedTheme);
      })();
    </script>
  </head>
  <body>
    <!-- ======= Site Wrap =======-->
    <div class="site-wrap">
      <!-- ======= Header =======-->
      <header class="fbs__net-navbar navbar navbar-expand-lg dark" aria-label="freebootstrap.net navbar">
        <div class="container d-flex align-items-center justify-content-between">
          <!-- Start Logo-->
          <a class="navbar-brand w-auto" href="index.html">
            <!-- If you use a text logo, uncomment this if it is commented-->
            <!-- Vertex--> 
            <!-- If you plan to use an image logo, uncomment this if it is commented-->
            <!-- logo dark--><img class="logo dark img-fluid" src="assets/images/logo/softenova_full_transparent.png" alt="FreeBootstrap.net image placeholder"> 
            <!-- logo light--><img class="logo light img-fluid" src="assets/images/logo-light.svg" alt="FreeBootstrap.net image placeholder">
            </a>
          <!-- End Logo-->
          <!-- Start offcanvas-->
          <div class="offcanvas offcanvas-start w-75" id="fbs__net-navbars" tabindex="-1" aria-labelledby="fbs__net-navbarsLabel">
            <div class="offcanvas-header">
              <div class="offcanvas-header-logo">
                <!-- If you use a text logo, uncomment this if it is commented-->
                <!-- h5#fbs__net-navbarsLabel.offcanvas-title Vertex-->
                <!-- If you plan to use an image logo, uncomment this if it is commented-->
                <a class="logo-link" id="fbs__net-navbarsLabel" href="index.html">
                  <!-- logo dark--><img class="logo dark img-fluid" src="assets/images/logo/softenova_full_transparent.png" alt="FreeBootstrap.net image placeholder"> 
                  <!-- logo light--><img class="logo light img-fluid" src="assets/images/logo/softenova_white.png" alt="FreeBootstrap.net image placeholder"></a>
              </div>
              <button class="btn-close btn-close-black" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            
            <div class="offcanvas-body align-items-lg-center">
              <ul class="navbar-nav nav me-auto ps-lg-5 mb-2 mb-lg-0">
                <li class="nav-item"><a class="nav-link" href="index.html#home">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="index.html#about">About Us</a></li>
                <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="index.html#services" data-bs-toggle="dropdown" aria-expanded="false">Services <i class="bi bi-chevron-down"></i></a>
                  <ul class="dropdown-menu">
                    <li class="nav-item dropstart"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Software Development <i class="bi bi-chevron-right"></i></a>
                      <ul class="dropdown-menu">
                        <li><a class="nav-link dropdown-item" href="index.html#services">Web Development</a></li>
                        <li><a class="nav-link dropdown-item" href="index.html#services">Mobile App Development</a></li>
                        <li><a class="nav-link dropdown-item" href="index.html#services">E-Commerce Management</a></li>
                        <li><a class="nav-link dropdown-item" href="index.html#services">Business Tools</a></li>
                      </ul>
                    </li>
                    <li><a class="nav-link dropdown-item" href="index.html#services">Software Maintenance</a></li>
                    <li><a class="nav-link dropdown-item" href="index.html#services">Quality Assurance and Automation</a></li>
                    <li><a class="nav-link dropdown-item" href="index.html#services">Resource Augmentation</a></li>
                    <li><a class="nav-link dropdown-item" href="index.html#services">Project Management</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="index.html#products" data-bs-toggle="dropdown" aria-expanded="false">Products <i class="bi bi-chevron-down"></i></a>
                  <ul class="dropdown-menu">
                    <li><a class="nav-link dropdown-item" href="index.html#products">Bizenova (Coming Soon)</a></li>
                  </ul>
                </li>
                <li class="nav-item"><a class="nav-link" href="careers.html">Career</a></li>
                <li class="nav-item"><a class="nav-link" href="index.html#contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <!-- End offcanvas-->
          
          <div class="ms-auto w-auto">
            <div class="header-social d-flex align-items-center gap-1"><a class="btn btn-primary py-2" href="https://wa.me/8801521734190?text=Hi%21%20I%27d%20like%20to%20schedule%20a%20call.%20Please%20let%20me%20know%20your%20available%20time%20slots." target="_blank">Schedule a Call</a>
              <button class="fbs__net-navbar-toggler justify-content-center align-items-center ms-auto" data-bs-toggle="offcanvas" data-bs-target="#fbs__net-navbars" aria-controls="fbs__net-navbars" aria-label="Toggle navigation" aria-expanded="false">
                <svg class="fbs__net-icon-menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="21" x2="3" y1="6" y2="6"></line>
                  <line x1="15" x2="3" y1="12" y2="12"></line>
                  <line x1="17" x2="3" y1="18" y2="18"></line>
                </svg>
                <svg class="fbs__net-icon-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <!-- End Header-->
      
      <!-- ======= Main =======-->
      <main>
        <!-- ======= Page Title =======-->
        <section class="section py-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-8 mx-auto text-center">
                <h1 class="page-title mb-3" data-aos="fade-up">Sample Page Title</h1>
                <p class="lead" data-aos="fade-up" data-aos-delay="100">Sample Page Description</p>
              </div>
            </div>
          </div>
        </section>
        <!-- End Page Title -->

        <!-- ======= Page Main Content =======-->
        <!-- End Page Main Content -->

        <!-- ======= Footer =======-->
        <footer class="footer pt-5 pb-2">
          <div class="container">
            <div class="row justify-content-between mb-5 g-xl-5">
              <div class="col-md-4 mb-5 mb-lg-0">
                <h3 class="mb-3">Softenova Limited</h3>
                <p class="mb-4">We build innovative solutions, focusing on software products that solve everyday challenges for businesses and individuals.</p>
              </div>
              <div class="col-md-7">
                <div class="row g-2">
                  <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
                    <h3 class="mb-3">Quick Links</h3>
                    <ul class="list-unstyled">
                      <li><a href="index.html#home">Home</a></li>
                      <li><a href="index.html#about">About Us</a></li>
                      <li><a href="index.html#services">Services</a></li>
                      <li><a href="index.html#products">Products</a></li>
                      <li><a href="index.html#consultancy">Need Consultancy?</a></li>
                      <li><a href="index.html#why-choose-us">Why Choose Us?</a></li>
                      <li><a href="index.html#faqs">FAQs</a></li>
                    </ul>
                  </div>
                  <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
                    <h3 class="mb-3">Other Pages</h3>
                    <ul class="list-unstyled">
                      <li><a href="careers.html">Careers <span class="badge ms-1">HIRING</span></a></li>
                      <li><a href="terms-and-conditions.html">Terms &amp; Conditions</a></li>
                      <li><a href="privacy-policy.html">Privacy Policy</a></li>
                    </ul>
                  </div>
                  <div class="col-md-6 col-lg-4 mb-4 mb-lg-0 quick-contact">
                    <h3 class="mb-3">Contact</h3>
                    <p class="d-flex mb-3"><i class="bi bi-geo-alt-fill me-3"></i><span>Road-1, House-2, Block-F, Mirpur-2, Dhaka-1216</span></p><a class="d-flex mb-3" href="mailto:softenova@gmail.com"><i class="bi bi-envelope-fill me-3"></i><span>softenova@gmail.com</span></a><a class="d-flex mb-3" href="tel://+8801521734190"><i class="bi bi-telephone-fill me-3"></i><span>+880 1521734190</span></a><a class="d-flex mb-3" href="https://softenova.com"><i class="bi bi-globe me-3"></i><span>softenova.com</span></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row credits pt-0">
              <div class="col-xl-8 text-center text-xl-start mb-0 mb-xl-0">
                &copy;
                <script>document.write(new Date().getFullYear());</script> Softenova. 
                 All rights reserved | Designed by <a href="https://freebootstrap.net">FreeBootstrap.net</a>
              </div>
              <div class="col-xl-4 justify-content-start justify-content-xl-end quick-links d-flex flex-column flex-xl-row text-center text-xl-start gap-1">Distributed by<a href="https://themewagon.com" target="_blank">ThemeWagon</a></div>
            </div>
          </div>
        </footer>
        <!-- End Footer-->
        
      </main>
      <!-- End Main-->

    </div>
    
    <!-- ======= Floating WhatsApp Button =======-->
    <a href="https://wa.me/8801521734190?text=Hey%21%20I%20am%20interested%20in%20Softenova.%20Can%20we%20talk%3F" target="_blank" class="whatsapp-float" title="Chat with us on WhatsApp">
      <i class="bi bi-whatsapp"></i>
    </a>
    <!-- End Floating WhatsApp Button-->
    
    <!-- ======= Back to Top =======-->
    <button id="back-to-top"><i class="bi bi-arrow-up-short"></i></button>
    <!-- End Back to top-->
    
    <!-- ======= Javascripts =======-->
    <script src="assets/vendors/bootstrap/bootstrap.bundle.min.js"></script>
    <script src="assets/vendors/gsap/gsap.min.js"></script>
    <script src="assets/vendors/imagesloaded/imagesloaded.pkgd.min.js"></script>
    <script src="assets/vendors/isotope/isotope.pkgd.min.js"></script>
    <script src="assets/vendors/glightbox/glightbox.min.js"></script>
    <script src="assets/vendors/swiper/swiper-bundle.min.js"></script>
    <script src="assets/vendors/aos/aos.js"></script>
    <script src="assets/vendors/purecounter/purecounter.js"></script>
    <script src="assets/js/custom.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
    <script src="assets/js/send_email.js"></script>
    <!-- <script src="assets/js/send_message.js"></script> -->
    <!-- End JavaScripts-->
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