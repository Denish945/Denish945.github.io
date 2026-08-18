// ============================================
// Main JavaScript for Portfolio Site
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            // Accessibility: toggle aria-expanded
            const isOpen = navLinks.classList.contains('open');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });

        // Close menu when a link is clicked (good UX)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // --- Smooth scrolling for internal anchor links (if any) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Only handle internal links that start with #
            if (href && href.startsWith('#') && href.length > 1) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // --- Active navigation link highlight (simple version) ---
    // This highlights the current page in the nav.
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLink = document.querySelector(`.nav-links a[href="${currentPage}"]`);
    if (navLink) {
        document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
        navLink.classList.add('active');
    }

    console.log('🚀 Portfolio site ready.');
});