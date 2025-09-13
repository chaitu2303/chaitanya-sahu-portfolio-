document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll to the target element smoothly
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Optional: Close mobile navigation if open (you'd need to add mobile nav toggle logic for this)
                // if (window.innerWidth < 768) { // Example breakpoint
                //     const navMenu = document.querySelector('.nav-links'); // Assuming this is your mobile menu
                //     if (navMenu) {
                //         navMenu.classList.remove('active'); // Remove active class to hide
                //     }
                // }
            }
        });
    });

    // You can add more JavaScript functionality here as needed.
    // Examples:
    // - A "back to top" button that appears on scroll
    // - Dynamic content loading
    // - Form validation (though Formspree handles server-side)

    // Example: Highlight active nav link based on scroll position (more advanced)
    // const sections = document.querySelectorAll('section');
    // const navLinks = document.querySelectorAll('.nav-links a');

    // window.addEventListener('scroll', () => {
    //     let current = '';
    //     sections.forEach(section => {
    //         const sectionTop = section.offsetTop;
    //         const sectionHeight = section.clientHeight;
    //         if (pageYOffset >= sectionTop - sectionHeight / 3) { // Adjust /3 for when to highlight
    //             current = section.getAttribute('id');
    //         }
    //     });

    //     navLinks.forEach(link => {
    //         link.classList.remove('active-nav-link');
    //         if (link.getAttribute('href').includes(current)) {
    //             link.classList.add('active-nav-link');
    //         }
    //     });
    // });
});