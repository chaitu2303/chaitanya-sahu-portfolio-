document.addEventListener('DOMContentLoaded', function() {
    // --- Mobile Menu Toggle ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('is-active'); // For animating the icon
        });
    }

    // --- Smooth scrolling for navigation links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile navigation after clicking a link
                if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenu.classList.remove('is-active');
                }
            }
        });
    });
    // You can add more JavaScript functionality here as needed.
});