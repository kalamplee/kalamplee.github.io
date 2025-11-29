/**
 * Animation effects using anime.js
 * Applied to blog cards, navigation, and page elements
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function () {

    // Animate blog cards on page load
    if (document.querySelectorAll('.blog-card').length > 0) {
        anime({
            targets: '.blog-card',
            translateY: [40, 0],
            opacity: [0, 1],
            delay: anime.stagger(80, { start: 200 }),
            duration: 800,
            easing: 'easeOutCubic'
        });
    }

    // Animate navigation links
    if (document.querySelectorAll('.nav-link').length > 0) {
        anime({
            targets: '.nav-link',
            translateY: [-15, 0],
            opacity: [0, 1],
            delay: anime.stagger(60),
            duration: 600,
            easing: 'easeOutQuad'
        });
    }

    // Animate contact items on landing page
    if (document.querySelectorAll('.contact-item').length > 0) {
        anime({
            targets: '.contact-item',
            scale: [0.9, 1],
            opacity: [0, 1],
            delay: anime.stagger(100, { start: 300 }),
            duration: 700,
            easing: 'easeOutElastic(1, .6)'
        });
    }

    // Animate profile section
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        anime({
            targets: profileImage,
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutElastic(1, .5)'
        });
    }

    const profileName = document.querySelector('.profile-name');
    if (profileName) {
        anime({
            targets: profileName,
            translateY: [20, 0],
            opacity: [0, 1],
            duration: 800,
            delay: 300,
            easing: 'easeOutCubic'
        });
    }

    const profileBio = document.querySelector('.profile-bio');
    if (profileBio) {
        anime({
            targets: profileBio,
            translateY: [20, 0],
            opacity: [0, 1],
            duration: 800,
            delay: 450,
            easing: 'easeOutCubic'
        });
    }

    // Animate section headings (h2)
    if (document.querySelectorAll('section h2').length > 0) {
        anime({
            targets: 'section h2',
            translateX: [-30, 0],
            opacity: [0, 1],
            delay: anime.stagger(200, { start: 400 }),
            duration: 800,
            easing: 'easeOutCubic'
        });
    }

    // Animate buttons
    if (document.querySelectorAll('.btn').length > 0) {
        anime({
            targets: '.btn',
            scale: [0.95, 1],
            opacity: [0, 1],
            duration: 600,
            delay: 500,
            easing: 'easeOutQuad'
        });
    }

    // Add hover animation for blog cards
    document.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            anime({
                targets: this,
                scale: 1.02,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });

        card.addEventListener('mouseleave', function () {
            anime({
                targets: this,
                scale: 1,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });

    // Add click animation for buttons
    document.querySelectorAll('.btn, .filter-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            anime({
                targets: this,
                scale: [1, 0.95, 1],
                duration: 400,
                easing: 'easeOutElastic(1, .5)'
            });
        });
    });

    // Animate filter buttons when they appear
    const categoryFilters = document.getElementById('category-filters');
    if (categoryFilters) {
        // Wait for filters to be generated, then animate
        const observer = new MutationObserver(function (mutations) {
            if (categoryFilters.children.length > 0) {
                anime({
                    targets: '.filter-btn',
                    scale: [0.8, 1],
                    opacity: [0, 1],
                    delay: anime.stagger(40),
                    duration: 500,
                    easing: 'easeOutBack'
                });
                observer.disconnect();
            }
        });

        observer.observe(categoryFilters, { childList: true });
    }

    // Scroll-based animations for elements coming into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const animateOnScroll = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    translateY: [30, 0],
                    opacity: [0, 1],
                    duration: 800,
                    easing: 'easeOutCubic'
                });
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply scroll animation to sections
    document.querySelectorAll('section').forEach(section => {
        animateOnScroll.observe(section);
    });

});
