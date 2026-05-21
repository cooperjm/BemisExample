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
	const sizeValEl = document.getElementById('val-size');
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
			
			// Update label text
			if (sizeValEl) {
				const size = btn.dataset.size;
				sizeValEl.textContent = size.charAt(0).toUpperCase() + size.slice(1);
			}
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

	// 7. Lightroom / Lightbox Zoom Modal (FLIP animation with cycling)
	const lightroomModal = document.getElementById('lightroom-modal');
	const lightroomImg = document.getElementById('lightroom-img');
	const lightroomClose = document.getElementById('lightroom-close');
	const lightroomPrev = document.getElementById('lightroom-prev');
	const lightroomNext = document.getElementById('lightroom-next');
	
	if (mainProductImg && lightroomModal && lightroomImg && lightroomClose && lightroomPrev && lightroomNext) {
		let isLightboxActive = false;
		let currentIndex = 0;
		
		// Calculate centered viewport dimensions preserving aspect ratio
		function getTargetRect(startRect) {
			const naturalRatio = mainProductImg.naturalWidth / mainProductImg.naturalHeight || startRect.width / startRect.height;
			
			// Target max bounds: 85% of screen width and height
			const maxW = window.innerWidth * 0.85;
			const maxH = window.innerHeight * 0.85;
			
			let targetW = maxW;
			let targetH = targetW / naturalRatio;
			
			if (targetH > maxH) {
				targetH = maxH;
				targetW = targetH * naturalRatio;
			}
			
			const targetLeft = (window.innerWidth - targetW) / 2;
			const targetTop = (window.innerHeight - targetH) / 2;
			
			return {
				left: targetLeft,
				top: targetTop,
				width: targetW,
				height: targetH
			};
		}
		
		// Recalculate dimensions on window resize if lightbox is open
		function handleResize() {
			if (!isLightboxActive) return;
			const startRect = mainProductImg.getBoundingClientRect();
			const target = getTargetRect(startRect);
			
			lightroomImg.style.transition = 'none';
			lightroomImg.style.top = `${target.top}px`;
			lightroomImg.style.left = `${target.left}px`;
			lightroomImg.style.width = `${target.width}px`;
			lightroomImg.style.height = `${target.height}px`;
		}
		
		window.addEventListener('resize', handleResize);
		
		// Navigate to a specific thumbnail index in the lightbox
		function navigateToImage(newIndex) {
			if (!isLightboxActive) return;
			
			if (newIndex < 0) newIndex = thumbBtns.length - 1;
			if (newIndex >= thumbBtns.length) newIndex = 0;
			currentIndex = newIndex;
			
			const nextThumb = thumbBtns[currentIndex];
			
			// Update active class on thumbnails & center it
			thumbBtns.forEach(t => t.classList.remove('active'));
			nextThumb.classList.add('active');
			
			const container = document.querySelector('.gallery-thumbnails');
			if (container) {
				const containerWidth = container.offsetWidth;
				const thumbLeft = nextThumb.offsetLeft;
				const thumbWidth = nextThumb.offsetWidth;
				container.scrollTo({
					left: thumbLeft - (containerWidth / 2) + (thumbWidth / 2),
					behavior: 'smooth'
				});
			}
			
			// Update main background page image
			mainProductImg.src = nextThumb.dataset.full;
			
			// Smoothly fade out the lightbox image, swap src, and fade in
			lightroomImg.style.transition = 'opacity 0.2s var(--ease)';
			lightroomImg.style.opacity = '0';
			
			setTimeout(() => {
				lightroomImg.src = nextThumb.dataset.full;
				
				// Re-calculate target rect for the new image in case of differing natural aspect ratio
				const currentStartRect = mainProductImg.getBoundingClientRect();
				const target = getTargetRect(currentStartRect);
				
				lightroomImg.style.top = `${target.top}px`;
				lightroomImg.style.left = `${target.left}px`;
				lightroomImg.style.width = `${target.width}px`;
				lightroomImg.style.height = `${target.height}px`;
				
				lightroomImg.onload = () => {
					lightroomImg.style.opacity = '1';
					// Restore full transition for subsequent operations after short delay
					setTimeout(() => {
						lightroomImg.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
					}, 50);
				};
				
				// Fallback
				setTimeout(() => {
					lightroomImg.style.opacity = '1';
					lightroomImg.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
				}, 200);
				
			}, 200);
		}
		
		// Open Lightbox
		mainProductImg.addEventListener('click', () => {
			if (isLightboxActive) return;
			isLightboxActive = true;
			
			// Sync index with current active thumbnail
			currentIndex = Array.from(thumbBtns).findIndex(btn => btn.classList.contains('active'));
			if (currentIndex === -1) currentIndex = 0;
			
			// 1. Get initial image dimensions and coordinates
			const startRect = mainProductImg.getBoundingClientRect();
			
			// 2. Setup the zoom image source
			lightroomImg.src = mainProductImg.src;
			
			// 3. Position zoomed image exactly where the thumbnail/main image is currently located
			lightroomImg.style.transition = 'none';
			lightroomImg.style.top = `${startRect.top}px`;
			lightroomImg.style.left = `${startRect.left}px`;
			lightroomImg.style.width = `${startRect.width}px`;
			lightroomImg.style.height = `${startRect.height}px`;
			lightroomImg.style.opacity = '1';
			
			// 4. Activate modal overlay
			lightroomModal.classList.add('is-active');
			lightroomModal.setAttribute('aria-hidden', 'false');
			document.body.classList.add('lightroom-open');
			
			// 5. Force reflow
			lightroomImg.offsetWidth;
			
			// 6. Calculate target centered state
			const target = getTargetRect(startRect);
			
			// 7. Play the FLIP transition to centered size
			lightroomImg.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
			lightroomImg.style.top = `${target.top}px`;
			lightroomImg.style.left = `${target.left}px`;
			lightroomImg.style.width = `${target.width}px`;
			lightroomImg.style.height = `${target.height}px`;
		});
		
		// Close Lightbox
		function closeLightbox() {
			if (!isLightboxActive) return;
			isLightboxActive = false;
			
			// Get current position of source image (in case scrolled or cycled to a new index)
			const currentRect = mainProductImg.getBoundingClientRect();
			
			// Animate image back to its current page coordinates
			lightroomImg.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
			lightroomImg.style.top = `${currentRect.top}px`;
			lightroomImg.style.left = `${currentRect.left}px`;
			lightroomImg.style.width = `${currentRect.width}px`;
			lightroomImg.style.height = `${currentRect.height}px`;
			
			// Fade out background overlay
			lightroomModal.classList.remove('is-active');
			lightroomModal.setAttribute('aria-hidden', 'true');
			document.body.classList.remove('lightroom-open');
			
			// Clean up elements after animation ends
			function handleTransitionEnd(e) {
				if (e.target !== lightroomImg) return;
				
				lightroomImg.style.transition = 'none';
				lightroomImg.style.top = '';
				lightroomImg.style.left = '';
				lightroomImg.style.width = '';
				lightroomImg.style.height = '';
				lightroomImg.src = '';
				
				lightroomImg.removeEventListener('transitionend', handleTransitionEnd);
			}
			
			lightroomImg.addEventListener('transitionend', handleTransitionEnd);
		}
		
		// Next / Prev button triggers
		lightroomPrev.addEventListener('click', (e) => {
			e.stopPropagation();
			navigateToImage(currentIndex - 1);
		});
		
		lightroomNext.addEventListener('click', (e) => {
			e.stopPropagation();
			navigateToImage(currentIndex + 1);
		});
		
		// Event triggers for closing
		lightroomClose.addEventListener('click', closeLightbox);
		lightroomModal.addEventListener('click', (e) => {
			// Don't close if user clicks the arrow buttons
			if (e.target.closest('.lightroom-arrow')) return;
			
			if (e.target === lightroomModal || e.target === lightroomImg || e.target.classList.contains('lightroom-content')) {
				closeLightbox();
			}
		});
		
		// Key listeners (Arrow keys for navigation, Escape for close)
		window.addEventListener('keydown', (e) => {
			if (!isLightboxActive) return;
			
			if (e.key === 'Escape') {
				closeLightbox();
			} else if (e.key === 'ArrowLeft') {
				navigateToImage(currentIndex - 1);
			} else if (e.key === 'ArrowRight') {
				navigateToImage(currentIndex + 1);
			}
		});
	}
});
