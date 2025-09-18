// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Mobile menu toggle logic
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    });


    // Custom cursor functionality
    const cursor = document.querySelector('.cursor');
    const interactiveElements = document.querySelectorAll('a, .btn, .btn-small');

    // Move the custom cursor with the mouse
    document.addEventListener('mousemove', e => {
        cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    });

    // Add hover effect to the custom cursor
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover-effect');
        });
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover-effect');
        });
    });

});