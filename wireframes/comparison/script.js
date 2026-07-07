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


// ============================================================
// SHOW ONLY DIFFERENCES — filter comparison table rows
// ============================================================
const diffToggle = document.getElementById('show-differences-toggle');
const compareRows = document.querySelectorAll('.compare-table tbody tr');

if (diffToggle && compareRows.length) {
    diffToggle.addEventListener('change', (e) => {
        const isChecked = e.target.checked;
        
        compareRows.forEach(row => {
            const cells = Array.from(row.querySelectorAll('td'));
            if (cells.length < 6) return; // skip if row format is unexpected
            
            const modelCells = cells.slice(1); // skip feature name cell
            const firstVal = getCellValue(modelCells[0]);
            
            const allSame = modelCells.every(cell => getCellValue(cell) === firstVal);
            
            if (allSame) {
                if (isChecked) {
                    row.style.opacity = '0';
                    setTimeout(() => {
                        if (diffToggle.checked) {
                            row.style.display = 'none';
                        }
                    }, 200); // match fade transition
                } else {
                    row.style.display = '';
                    setTimeout(() => {
                        row.style.opacity = '1';
                    }, 10);
                }
            }
        });
    });
}

function getCellValue(cell) {
    if (cell.querySelector('.dot-present')) return 'present';
    const text = cell.textContent.trim().toLowerCase();
    return text === '' ? 'absent' : text;
}


// ============================================================
// CONFIGURATOR OPTIONS — update price simulation on select change
// ============================================================
const modelSelects = document.querySelectorAll('.model-select');

if (modelSelects.length) {
    modelSelects.forEach(select => {
        select.addEventListener('change', (e) => {
            const selectEl = e.target;
            const model = selectEl.getAttribute('data-model');
            const th = selectEl.closest('th');
            if (!th) return;
            
            let currentPrice = "$199 USD";
            let originalPrice = "$219 USD";
            
            if (model === 'bb-500') {
                if (selectEl.value === 'round') {
                    currentPrice = "$189 USD";
                    originalPrice = "$209 USD";
                } else {
                    currentPrice = "$199 USD";
                    originalPrice = "$219 USD";
                }
            } else if (model === 'bb-1000') {
                if (selectEl.value === 'round') {
                    currentPrice = "$349 USD";
                    originalPrice = "$389 USD";
                } else {
                    currentPrice = "$359 USD";
                    originalPrice = "$399 USD";
                }
            } else if (model === 'bb-2000') {
                if (selectEl.value === 'round') {
                    currentPrice = "$539 USD";
                    originalPrice = "";
                } else {
                    currentPrice = "$549 USD";
                    originalPrice = "";
                }
            }
            
            const currentPriceEl = th.querySelector('.current-price');
            if (currentPriceEl) {
                currentPriceEl.textContent = currentPrice;
            }
            const originalEl = th.querySelector('.price-original');
            if (originalEl) {
                originalEl.textContent = originalPrice;
                originalEl.style.display = originalPrice ? '' : 'none';
            }
        });
    });
}


// ============================================================
// GLOSSARY SEARCH — filter glossary cards based on input
// ============================================================
const glossarySearch = document.getElementById('glossary-search');
const glossaryCards = document.querySelectorAll('.glossary-card');

if (glossarySearch && glossaryCards.length) {
    glossarySearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        glossaryCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const text = card.querySelector('p').textContent.toLowerCase();
            const tags = card.getAttribute('data-tags') ? card.getAttribute('data-tags').toLowerCase() : '';
            
            if (title.includes(query) || text.includes(query) || tags.includes(query)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
}

// ============================================================
// INITIALIZE LUCIDE ICONS
// ============================================================
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}

