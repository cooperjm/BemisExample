// ============================================================
// HEADER — add shadow on scroll
// ============================================================
const header = document.getElementById('site-header');

window.addEventListener('scroll', () => {
	if (header) {
		header.classList.toggle('scrolled', window.scrollY > 10);
	}
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
// CUSTOM DROPDOWNS INTERACTION
// ============================================================
const dropdowns = document.querySelectorAll('.custom-dropdown');

dropdowns.forEach(dropdown => {
	const trigger = dropdown.querySelector('.dropdown-trigger');
	
	trigger.addEventListener('click', (e) => {
		e.stopPropagation();
		
		// Close all other dropdowns
		dropdowns.forEach(d => {
			if (d !== dropdown) d.classList.remove('active');
		});
		
		dropdown.classList.toggle('active');
	});
});

// Close dropdowns when clicking outside
document.addEventListener('click', () => {
	dropdowns.forEach(d => d.classList.remove('active'));
});

// Prevent dropdown close when clicking inside the dropdown menu
document.querySelectorAll('.dropdown-menu').forEach(menu => {
	menu.addEventListener('click', (e) => {
		e.stopPropagation();
	});
});


// ============================================================
// FILTERING & SORTING ENGINE
// ============================================================
const catalogGrid = document.getElementById('catalog-grid');
const noResults = document.getElementById('no-results');
const productCount = document.getElementById('product-count');
const productCards = Array.from(document.querySelectorAll('.product-card'));
const activeTagsContainer = document.querySelector('.active-tags-wrap');
const activeTagsRow = document.getElementById('active-filters-tags');
const clearAllBtn = document.getElementById('clear-all-filters');
const resetBtn = document.getElementById('btn-reset-filters');

// Form inputs
const availabilityRadios = document.querySelectorAll('input[name="availability"]');
const priceRadios = document.querySelectorAll('input[name="price"]');
const sizeRadios = document.querySelectorAll('input[name="size"]');
const featureCheckboxes = document.querySelectorAll('#dropdown-features input[type="checkbox"]');
const sortRadios = document.querySelectorAll('input[name="sort"]');
const sortTriggerText = document.querySelector('#dropdown-sort .dropdown-trigger span');

// Setup change event listeners
availabilityRadios.forEach(input => input.addEventListener('change', updateFilters));
priceRadios.forEach(input => input.addEventListener('change', updateFilters));
sizeRadios.forEach(input => input.addEventListener('change', updateFilters));
featureCheckboxes.forEach(input => input.addEventListener('change', updateFilters));
sortRadios.forEach(input => {
	input.addEventListener('change', (e) => {
		const labelText = e.target.nextElementSibling.textContent;
		sortTriggerText.textContent = `Sort By: ${labelText}`;
		dropdowns.forEach(d => d.classList.remove('active'));
		applySorting();
	});
});

// Global state of active filters
function updateFilters() {
	let visibleCount = 0;
	const activeFilters = {
		availability: document.querySelector('input[name="availability"]:checked').value,
		price: document.querySelector('input[name="price"]:checked').value,
		size: document.querySelector('input[name="size"]:checked').value,
		features: Array.from(featureCheckboxes).filter(cb => cb.checked).map(cb => cb.value)
	};

	// 1. Filter elements
	productCards.forEach(card => {
		const cardAvailability = card.getAttribute('data-availability');
		const cardPrice = parseFloat(card.getAttribute('data-price'));
		const cardSize = card.getAttribute('data-size');
		const cardFeatures = card.getAttribute('data-features').split(' ');

		let matchesAvailability = true;
		let matchesPrice = true;
		let matchesSize = true;
		let matchesFeatures = true;

		// Match availability
		if (activeFilters.availability !== 'all') {
			matchesAvailability = (cardAvailability === activeFilters.availability);
		}

		// Match price range
		if (activeFilters.price !== 'all') {
			if (activeFilters.price === 'under-200') matchesPrice = (cardPrice < 200);
			else if (activeFilters.price === '200-400') matchesPrice = (cardPrice >= 200 && cardPrice <= 400);
			else if (activeFilters.price === 'over-400') matchesPrice = (cardPrice > 400);
		}

		// Match size
		if (activeFilters.size !== 'all') {
			matchesSize = (cardSize === activeFilters.size || cardSize === 'both');
		}

		// Match features (ALL features selected must be present)
		if (activeFilters.features.length > 0) {
			matchesFeatures = activeFilters.features.every(feat => cardFeatures.includes(feat));
		}

		// Show/Hide Card
		if (matchesAvailability && matchesPrice && matchesSize && matchesFeatures) {
			card.style.display = '';
			visibleCount++;
		} else {
			card.style.display = 'none';
		}
	});

	// 2. Update stats and visibility containers
	productCount.textContent = visibleCount;
	if (visibleCount === 0) {
		catalogGrid.style.display = 'none';
		noResults.style.display = 'block';
	} else {
		catalogGrid.style.display = '';
		noResults.style.display = 'none';
	}

	// 3. Update active tag UI elements
	renderActiveFilterTags(activeFilters);
	updateDropdownHighlightStates();
}

// Visual feedback on dropdown trigger elements if active
function updateDropdownHighlightStates() {
	// Availability
	const avVal = document.querySelector('input[name="availability"]:checked').value;
	document.getElementById('dropdown-availability').classList.toggle('active-filter', avVal !== 'all');
	
	// Price
	const prVal = document.querySelector('input[name="price"]:checked').value;
	document.getElementById('dropdown-price').classList.toggle('active-filter', prVal !== 'all');
	
	// Size
	const szVal = document.querySelector('input[name="size"]:checked').value;
	document.getElementById('dropdown-size').classList.toggle('active-filter', szVal !== 'all');
	
	// Features
	const checkedFeatCount = Array.from(featureCheckboxes).filter(cb => cb.checked).length;
	document.getElementById('dropdown-features').classList.toggle('active-filter', checkedFeatCount > 0);
}

// Generate chips in active filter panel
function renderActiveFilterTags(filters) {
	activeTagsContainer.innerHTML = '';
	let totalActiveFilters = 0;

	// Tag generator helper
	const createTag = (label, resetFn) => {
		const tag = document.createElement('div');
		tag.className = 'filter-tag';
		tag.innerHTML = `
			<span>${label}</span>
			<span class="filter-tag-close">
				<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
			</span>
		`;
		tag.querySelector('.filter-tag-close').addEventListener('click', resetFn);
		activeTagsContainer.appendChild(tag);
		totalActiveFilters++;
	};

	// Check Availability
	if (filters.availability !== 'all') {
		const text = filters.availability === 'in-stock' ? 'In Stock' : 'Out of Stock';
		createTag(`Status: ${text}`, () => {
			document.querySelector('input[name="availability"][value="all"]').checked = true;
			updateFilters();
		});
	}

	// Check Price
	if (filters.price !== 'all') {
		let text = 'All Prices';
		if (filters.price === 'under-200') text = 'Under $200';
		else if (filters.price === '200-400') text = '$200 - $400';
		else if (filters.price === 'over-400') text = 'Over $400';
		createTag(`Price: ${text}`, () => {
			document.querySelector('input[name="price"][value="all"]').checked = true;
			updateFilters();
		});
	}

	// Check Size
	if (filters.size !== 'all') {
		const text = filters.size === 'elongated' ? 'Elongated' : 'Round';
		createTag(`Size: ${text}`, () => {
			document.querySelector('input[name="size"][value="all"]').checked = true;
			updateFilters();
		});
	}

	// Check Features
	featureCheckboxes.forEach(cb => {
		if (cb.checked) {
			const label = cb.nextElementSibling.textContent;
			createTag(label, () => {
				cb.checked = false;
				updateFilters();
			});
		}
	});

	// Toggle row visibility
	activeTagsRow.style.display = totalActiveFilters > 0 ? 'flex' : 'none';
}

// Reset all values
function resetAllFilters() {
	document.querySelector('input[name="availability"][value="all"]').checked = true;
	document.querySelector('input[name="price"][value="all"]').checked = true;
	document.querySelector('input[name="size"][value="all"]').checked = true;
	featureCheckboxes.forEach(cb => cb.checked = false);
	updateFilters();
}

clearAllBtn.addEventListener('click', resetAllFilters);
resetBtn.addEventListener('click', resetAllFilters);


// ============================================================
// SORTING IMPLEMENTATION
// ============================================================
function applySorting() {
	const sortBy = document.querySelector('input[name="sort"]:checked').value;
	
	const sorted = productCards.sort((a, b) => {
		if (sortBy === 'price-asc') {
			return parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price'));
		} else if (sortBy === 'price-desc') {
			return parseFloat(b.getAttribute('data-price')) - parseFloat(a.getAttribute('data-price'));
		} else if (sortBy === 'name-asc') {
			return a.getAttribute('data-name').localeCompare(b.getAttribute('data-name'));
		} else {
			// Featured default sorting
			return parseInt(a.getAttribute('data-featured')) - parseInt(b.getAttribute('data-featured'));
		}
	});

	// Re-inject elements in order
	sorted.forEach(card => {
		catalogGrid.appendChild(card);
	});
}


// ============================================================
// LAYOUT GRID VS LIST VIEW TOGGLE
// ============================================================
const gridBtn = document.getElementById('layout-grid');
const listBtn = document.getElementById('layout-list');

gridBtn.addEventListener('click', () => {
	gridBtn.classList.add('active');
	listBtn.classList.remove('active');
	catalogGrid.classList.remove('list-view');
});

listBtn.addEventListener('click', () => {
	listBtn.classList.add('active');
	gridBtn.classList.remove('active');
	catalogGrid.classList.add('list-view');
});


// ============================================================
// SCROLL REVEAL IMPLEMENTATION (Intersection Observer)
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
		rootMargin: '0px 0px -40px 0px'
	});

	revealEls.forEach(el => observer.observe(el));
}


// ============================================================
// RECENTLY VIEWED SLIDER SCROLL
// ============================================================
// Enables dragging and scroll adjustments for recently viewed list
const sliderTrack = document.querySelector('.recently-viewed-track');
let isDown = false;
let startX;
let scrollLeft;

if (sliderTrack) {
	sliderTrack.addEventListener('mousedown', (e) => {
		isDown = true;
		sliderTrack.classList.add('active');
		startX = e.pageX - sliderTrack.offsetLeft;
		scrollLeft = sliderTrack.scrollLeft;
	});

	sliderTrack.addEventListener('mouseleave', () => {
		isDown = false;
		sliderTrack.classList.remove('active');
	});

	sliderTrack.addEventListener('mouseup', () => {
		isDown = false;
		sliderTrack.classList.remove('active');
	});

	sliderTrack.addEventListener('mousemove', (e) => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - sliderTrack.offsetLeft;
		const walk = (x - startX) * 1.5; // scroll-fast multiplier
		sliderTrack.scrollLeft = scrollLeft - walk;
	});
}

// Run initial filter and tags render
updateFilters();
applySorting();
