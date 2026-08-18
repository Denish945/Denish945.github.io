// ============================================
// Software Projects - Interactive Features
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('💻 Software module loaded.');

    // Animate tech badges on hover
    const techBadges = document.querySelectorAll('.tech-badge');
    techBadges.forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            badge.style.transform = 'scale(1.05)';
            badge.style.transition = 'transform 0.2s ease';
        });
        badge.addEventListener('mouseleave', () => {
            badge.style.transform = 'scale(1)';
        });
    });

    // Add a subtle animation to module cards on scroll
    const moduleCards = document.querySelectorAll('.module-card, .principle-card, .automation-card, .electronics-card');
    
    if (moduleCards.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        moduleCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }

    // Architecture diagram interactivity
    const archLayers = document.querySelectorAll('.arch-layer');
    archLayers.forEach((layer, index) => {
        layer.addEventListener('mouseenter', () => {
            layer.style.backgroundColor = 'rgba(0, 212, 255, 0.1)';
            layer.style.borderColor = 'var(--color-accent)';
            layer.style.transition = 'all 0.3s ease';
        });
        layer.addEventListener('mouseleave', () => {
            layer.style.backgroundColor = 'rgba(0, 212, 255, 0.05)';
            layer.style.borderColor = 'rgba(0, 212, 255, 0.2)';
        });
    });
});