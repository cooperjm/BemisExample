// ============================================================
// HEADER — add shadow on scroll
// ============================================================
const header = document.getElementById('site-header');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });


// ============================================================
// HERO PARALLAX — subtle depth on the background image
// ============================================================
const heroImg = document.querySelector('.hero-img');

if (heroImg) {
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        if (y < window.innerHeight) {
            heroImg.style.transform = `translateY(${y * 0.38}px)`;
        }
    }, { passive: true });
}


// ============================================================
// SCROLL REVEAL — fade/slide elements in as they enter viewport
// ============================================================
const revealEls = document.querySelectorAll(
    '.reveal-fade, .reveal-up, .reveal-left, .reveal-right'
);

if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
    });

    revealEls.forEach(el => observer.observe(el));
}


// ============================================================
// SMOOTH ANCHOR SCROLL — offset for fixed header
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const id = this.getAttribute('href');
        if (id === '#') return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const offset = header ? header.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    });
});


// ============================================================
// PRODUCT IMAGES — subtle scale on scroll into view
// (adds a gentle "zoom in" as each product image arrives)
// ============================================================
const productImgs = document.querySelectorAll('.product-media img');

if (productImgs.length) {
    const imgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                entry.target.style.transform = 'scale(1)';
                imgObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    productImgs.forEach(img => {
        img.style.transform = 'scale(1.06)';
        imgObserver.observe(img);
    });
}
