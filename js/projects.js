// ============================================
// Projects Page JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // This file can be expanded with project-specific features.
    // For example, if you add a project filter or a gallery lightbox.

    console.log('📁 Projects module loaded.');

    // Example: Add a simple animation or interaction for project cards
    const projectCards = document.querySelectorAll('.featured-card, .project-card');
    if (projectCards.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        projectCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }
});