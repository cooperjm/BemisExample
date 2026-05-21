/* BioBidet Premium Redesign - Interactive Showroom (PDP v2) Script */

document.addEventListener('DOMContentLoaded', () => {
	// DOM Elements
	const header = document.getElementById('site-header');
	const stickyBuy = document.getElementById('sticky-buy');
	const showroomSection = document.querySelector('.showroom-section');
	const mainProductImg = document.getElementById('main-product-image');
	const thumbBtns = document.querySelectorAll('.thumb-btn');
	const styleOptions = document.querySelectorAll('.style-selector .segment-option');
	const sizeOptions = document.querySelectorAll('.size-selector .segment-option');
	const currentPriceEl = document.getElementById('current-price');
	const oldPriceEl = document.getElementById('old-price');
	const savingsEl = document.getElementById('price-savings');
	const stickyPriceEl = document.getElementById('sticky-price');
	const styleValEl = document.getElementById('val-style');
	const accordionHeaders = document.querySelectorAll('.accordion-header');
	const compatTabBtns = document.querySelectorAll('.compat-tab-btn');
	const compatPanels = document.querySelectorAll('.compat-panel');
	const revealEls = document.querySelectorAll('.reveal-fade, .reveal-up, .reveal-left, .reveal-right');

	// 1. Scroll-triggered Header and Sticky Bar effects
	window.addEventListener('scroll', () => {
		const y = window.scrollY;

		// Header scroll behavior
		if (header) {
			header.classList.toggle('is-scrolled', y > 24);
		}

		// Sticky purchase bar visibility
		if (showroomSection && stickyBuy) {
			const heroEnd = showroomSection.offsetTop + showroomSection.offsetHeight * 0.75;
			stickyBuy.classList.toggle('is-visible', y > heroEnd);
		}
	}, { passive: true });

	// Helper to swap the main image with animation
	function swapMainImage(targetImg) {
		if (!mainProductImg) return;
		mainProductImg.classList.add('swapping');
		
		setTimeout(() => {
			mainProductImg.setAttribute('src', targetImg);
			mainProductImg.onload = () => {
				mainProductImg.classList.remove('swapping');
			};
			// Fallback in case load event does not fire instantly
			setTimeout(() => {
				mainProductImg.classList.remove('swapping');
			}, 300);
		}, 200);
	}

	// Helper to update configurator style selection
	function updateStyleConfig(style, price, oldPrice) {
		// Update active styles on switcher buttons
		styleOptions.forEach(opt => {
			if (opt.dataset.style === style) {
				opt.classList.add('active');
			} else {
				opt.classList.remove('active');
			}
		});

		// Update label text
		if (styleValEl) {
			styleValEl.textContent = style === '550' ? 'BB-550 (With Dryer)' : 'BB-500 (Classic)';
		}

		// Update Price details
		const saveAmount = parseInt(oldPrice) - parseInt(price);
		if (currentPriceEl) currentPriceEl.textContent = `$${price}.00`;
		if (oldPriceEl) oldPriceEl.textContent = `$${oldPrice}.00`;
		if (savingsEl) savingsEl.textContent = `Save $${saveAmount}`;
		if (stickyPriceEl) stickyPriceEl.textContent = `$${price}.00`;
	}

	// 2. Configurator Style Switcher
	styleOptions.forEach((btn) => {
		btn.addEventListener('click', () => {
			if (btn.classList.contains('active')) return;

			const style = btn.dataset.style;
			const price = btn.dataset.price;
			const oldPrice = btn.dataset.oldPrice;

			updateStyleConfig(style, price, oldPrice);
		});
	});

	// Size selection toggle
	sizeOptions.forEach((btn) => {
		btn.addEventListener('click', () => {
			if (btn.classList.contains('disabled')) return;
			sizeOptions.forEach(opt => opt.classList.remove('active'));
			btn.classList.add('active');
		});
	});

	// 3. Product Gallery Thumbnail Click Handlers
	thumbBtns.forEach((thumb) => {
		thumb.addEventListener('click', () => {
			if (thumb.classList.contains('active')) return;

			const targetImg = thumb.dataset.full;

			// Update active class on thumbnails & center it
			thumbBtns.forEach(t => t.classList.remove('active'));
			thumb.classList.add('active');
			
			const container = document.querySelector('.gallery-thumbnails');
			if (container) {
				const containerWidth = container.offsetWidth;
				const thumbLeft = thumb.offsetLeft;
				const thumbWidth = thumb.offsetWidth;
				container.scrollTo({
					left: thumbLeft - (containerWidth / 2) + (thumbWidth / 2),
					behavior: 'smooth'
				});
			}

			swapMainImage(targetImg);
		});
	});

	// 4. Draggable Thumbnail Slider Interactivity
	const slider = document.querySelector('.gallery-thumbnails');
	const sliderWrapper = document.querySelector('.gallery-thumbnails-wrapper');
	if (slider && sliderWrapper) {
		let isDown = false;
		let startX;
		let scrollLeft;

		// Mouse events for dragging
		slider.addEventListener('mousedown', (e) => {
			isDown = true;
			slider.classList.add('active-drag');
			startX = e.pageX - slider.offsetLeft;
			scrollLeft = slider.scrollLeft;
		});

		slider.addEventListener('mouseleave', () => {
			isDown = false;
			slider.classList.remove('active-drag');
		});

		slider.addEventListener('mouseup', () => {
			isDown = false;
			slider.classList.remove('active-drag');
		});

		slider.addEventListener('mousemove', (e) => {
			if (!isDown) return;
			e.preventDefault();
			const x = e.pageX - slider.offsetLeft;
			const walk = (x - startX) * 1.5; // Drag speed multiplier
			slider.scrollLeft = scrollLeft - walk;
		});

		// Toggle side gradient fades based on scroll position
		const updateFades = () => {
			const left = slider.scrollLeft;
			const maxScroll = slider.scrollWidth - slider.clientWidth;
			
			sliderWrapper.classList.toggle('show-left-fade', left > 5);
			sliderWrapper.classList.toggle('hide-right-fade', left >= maxScroll - 5);
		};

		slider.addEventListener('scroll', updateFades);
		// Run once initially to check right side
		setTimeout(updateFades, 100);
	}

	// 4. Configurator Accordions (dynamic auto-collapse)
	accordionHeaders.forEach((headerBtn) => {
		headerBtn.addEventListener('click', () => {
			const item = headerBtn.closest('.accordion-item');
			const content = item.querySelector('.accordion-content');
			const isOpen = item.classList.contains('open');

			// Close sibling items
			document.querySelectorAll('.accordion-item').forEach((sibling) => {
				if (sibling !== item) {
					sibling.classList.remove('open');
					sibling.querySelector('.accordion-content').style.maxHeight = null;
					sibling.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
				}
			});

			if (isOpen) {
				item.classList.remove('open');
				content.style.maxHeight = null;
				headerBtn.setAttribute('aria-expanded', 'false');
			} else {
				item.classList.add('open');
				content.style.maxHeight = content.scrollHeight + 'px';
				headerBtn.setAttribute('aria-expanded', 'true');
			}
		});
	});

	// 5. Compatibility Studio Tab Switcher
	compatTabBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			if (btn.classList.contains('active')) return;

			// Update tabs active state
			compatTabBtns.forEach(t => t.classList.remove('active'));
			btn.classList.add('active');

			// Swap active panels
			const targetId = btn.dataset.tab;
			compatPanels.forEach((panel) => {
				if (panel.id === `tab-${targetId}`) {
					panel.classList.add('active');
				} else {
					panel.classList.remove('active');
				}
			});
		});
	});

	// 6. Intersection Observer for Scroll Reveals
	if (revealEls.length) {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			});
		}, {
			threshold: 0.15,
			rootMargin: '0px 0px -50px 0px'
		});

		revealEls.forEach(el => observer.observe(el));
	}
});
