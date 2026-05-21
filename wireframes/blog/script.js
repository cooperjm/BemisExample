document.addEventListener('DOMContentLoaded', () => {
    // 1. Header scroll class toggle
    const header = document.getElementById('site-header');
    
    const toggleHeaderScroll = () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', toggleHeaderScroll, { passive: true });
    toggleHeaderScroll(); // Check scroll position immediately on page load

    // 2. Parallax effect for hero background image
    const heroImg = document.querySelector('.hero-img');
    
    if (heroImg) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            if (scrollY < window.innerHeight) {
                // Translate the background slower than scroll speed for depth
                heroImg.style.transform = `translateY(${scrollY * 0.12}px) scale(1.02)`;
            }
        }, { passive: true });
    }

    // 3. Scroll Reveal System using IntersectionObserver
    const revealElements = document.querySelectorAll('.reveal-fade, .reveal-up, .reveal-left, .reveal-right');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Stop observing once the reveal has occurred
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        root: null, // defaults to viewport
        threshold: 0.12, // trigger when 12% of the element is in view
        rootMargin: '0px 0px -40px 0px' // adjust trigger boundary
    });

    revealElements.forEach(el => revealObserver.observe(el));
});
