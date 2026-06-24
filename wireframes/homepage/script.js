// BioBidet Premium Redesign - Homepage Wireframe JavaScript

document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================================
    // HEADER — add shadow and offset on scroll
    // ============================================================
    const header = document.getElementById('site-header');
    
    const handleScrollHeader = () => {
        if (window.scrollY > 15) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScrollHeader, { passive: true });
    handleScrollHeader(); // initial check
    
    // ============================================================
    // HERO SLIDESHOW — rotation, manual navigation, & autoplay
    // ============================================================
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    const prevArrow = document.querySelector('.hero-nav-arrow--prev');
    const nextArrow = document.querySelector('.hero-nav-arrow--next');
    const heroEl = document.getElementById('hero');

    let currentSlide = 0;
    let slideInterval = null;
    const intervalDuration = 7000; // 7 seconds

    const showSlide = (index) => {
        if (!slides.length) return;
        
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Wrap around bounds
        currentSlide = (index + slides.length) % slides.length;

        // Set active class
        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) {
            dots[currentSlide].classList.add('active');
        }
    };

    const nextSlide = () => {
        showSlide(currentSlide + 1);
    };

    const prevSlide = () => {
        showSlide(currentSlide - 1);
    };

    const startAutoplay = () => {
        stopAutoplay(); // clear existing if any
        slideInterval = setInterval(nextSlide, intervalDuration);
    };

    const stopAutoplay = () => {
        if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null;
        }
    };

    // Event listeners for arrows
    if (prevArrow) {
        prevArrow.addEventListener('click', () => {
            prevSlide();
            startAutoplay(); // Reset autoplay timer on click
        });
    }

    if (nextArrow) {
        nextArrow.addEventListener('click', () => {
            nextSlide();
            startAutoplay(); // Reset autoplay timer on click
        });
    }

    // Event listeners for dots
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            showSlide(idx);
            startAutoplay(); // Reset autoplay timer on click
        });
    });

    // Pause on hover
    if (heroEl) {
        heroEl.addEventListener('mouseenter', stopAutoplay);
        heroEl.addEventListener('mouseleave', startAutoplay);
    }

    // Initialize Autoplay
    if (slides.length > 0) {
        startAutoplay();
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
            threshold: 0.08,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealEls.forEach(el => observer.observe(el));
    }
    
    // ============================================================
    // SMOOTH ANCHOR SCROLL — offset for fixed header
    // ============================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (id === '#' || !id.startsWith('#')) return;
            const target = document.querySelector(id);
            if (!target) return;
            
            e.preventDefault();
            const headerHeight = header ? header.offsetHeight : 64;
            const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
    
    // ============================================================
    // INTERACTIVE SAVINGS CALCULATOR
    // ============================================================
    const peopleInput = document.getElementById('calc-people');
    const peopleValSpan = document.getElementById('people-val');
    const freqButtons = document.querySelectorAll('.calc-freq-option');
    const freqValSpan = document.getElementById('freq-val');
    const sliderPill = document.getElementById('calc-slider-pill');
    const savedMoneyEl = document.getElementById('saved-money');
    const savedRollsEl = document.getElementById('saved-rolls');
    
    let activeFreq = 'average';
    let peopleCount = 4;
    
    // Position the sliding selector pill initial state
    const updateFreqPillPosition = () => {
        const activeBtn = document.querySelector('.calc-freq-option.active');
        if (activeBtn && sliderPill) {
            sliderPill.style.width = `${activeBtn.offsetWidth}px`;
            sliderPill.style.transform = `translateX(${activeBtn.offsetLeft - 4}px)`;
        }
    };
    
    // Run recalculation math
    const calculateSavings = () => {
        // Multiplier: average rolls saved per person per year
        let rollsMultiplier = 60; // Average bidet reduces ~75% of ~80 standard rolls
        if (activeFreq === 'low') rollsMultiplier = 40;
        if (activeFreq === 'high') rollsMultiplier = 80;
        
        const rollsSaved = peopleCount * rollsMultiplier;
        const moneySaved = Math.round(rollsSaved * 1.25); // ~$1.25 per roll of toilet paper
        
        // Update values with a brief counter animation
        animateCounter(savedMoneyEl, moneySaved, '$');
        animateCounter(savedRollsEl, rollsSaved, '');
    };
    
    // Animate numbers counter for premium feel
    const animateCounter = (element, targetValue, prefix = '') => {
        if (!element) return;
        const startValue = parseInt(element.textContent.replace(/[^0-9]/g, '')) || 0;
        if (startValue === targetValue) {
            element.textContent = `${prefix}${targetValue}`;
            return;
        }
        
        const duration = 400; // ms
        const startTime = performance.now();
        
        const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.round(startValue + (targetValue - startValue) * easeProgress);
            
            element.textContent = `${prefix}${currentValue}`;
            
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                element.textContent = `${prefix}${targetValue}`;
            }
        };
        
        requestAnimationFrame(step);
    };
    
    // Event listener: Range slider (people)
    if (peopleInput) {
        peopleInput.addEventListener('input', (e) => {
            peopleCount = parseInt(e.target.value);
            peopleValSpan.textContent = `${peopleCount} ${peopleCount === 1 ? 'person' : 'people'}`;
            calculateSavings();
        });
    }
    
    // Event listeners: Segmented pill toggles (frequency)
    freqButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            freqButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            activeFreq = btn.getAttribute('data-freq');
            freqValSpan.textContent = btn.textContent;
            
            updateFreqPillPosition();
            calculateSavings();
        });
    });
    
    // Handle resizing window to re-align the selector pill
    window.addEventListener('resize', updateFreqPillPosition);
    
    // Initialize calculator
    updateFreqPillPosition();
    calculateSavings();
    
    // Delay initialization just in case fonts/styles layout slightly shifts offsetLeft
    setTimeout(updateFreqPillPosition, 250);

    // ============================================================
    // PRODUCT CAROUSEL SLIDER
    // ============================================================
    const sliderTrack = document.getElementById('product-slider-track');
    const sliderPrevBtn = document.getElementById('slider-prev');
    const sliderNextBtn = document.getElementById('slider-next');
    const sliderCards = document.querySelectorAll('.product-slider-card');

    if (sliderTrack && sliderCards.length > 0) {
        let currentIdx = 0;
        
        const getVisibleCardsCount = () => {
            if (window.innerWidth <= 768) return 1;
            if (window.innerWidth <= 1080) return 2;
            return 3;
        };

        const updateSlider = () => {
            const visibleCards = getVisibleCardsCount();
            const maxIdx = Math.max(0, sliderCards.length - visibleCards);
            
            // Boundary checks
            if (currentIdx > maxIdx) {
                currentIdx = maxIdx;
            }
            if (currentIdx < 0) {
                currentIdx = 0;
            }

            const firstCardRect = sliderCards[0].getBoundingClientRect();
            const secondCardRect = sliderCards[1]?.getBoundingClientRect();
            const cardStep = secondCardRect
                ? secondCardRect.left - firstCardRect.left
                : firstCardRect.width;

            const offset = currentIdx * cardStep;
            sliderTrack.style.transform = `translateX(-${offset}px)`;

            // Update disabled button states
            if (sliderPrevBtn) {
                sliderPrevBtn.disabled = currentIdx === 0;
            }
            if (sliderNextBtn) {
                sliderNextBtn.disabled = currentIdx >= maxIdx;
            }
        };

        if (sliderPrevBtn) {
            sliderPrevBtn.addEventListener('click', () => {
                currentIdx--;
                updateSlider();
            });
        }

        if (sliderNextBtn) {
            sliderNextBtn.addEventListener('click', () => {
                currentIdx++;
                updateSlider();
            });
        }

        // Recalculate on window resize
        window.addEventListener('resize', updateSlider);

        // Initial setup
        updateSlider();

        // Delay slight initialization to let layout settle
        setTimeout(updateSlider, 200);
    }
});
