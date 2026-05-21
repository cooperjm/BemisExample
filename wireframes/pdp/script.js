const header = document.getElementById('site-header');
const stickyBuy = document.getElementById('sticky-buy');
const hero = document.querySelector('.hero-stage');
const productRender = document.querySelector('.product-render');
const heroMediaFrame = document.querySelector('.hero-media-frame');
const revealEls = document.querySelectorAll(
	'.reveal-fade, .reveal-up, .reveal-left, .reveal-right'
);

window.addEventListener(
	'scroll',
	() => {
		const y = window.scrollY;
		header?.classList.toggle('is-scrolled', y > 12);

		if (hero && stickyBuy) {
			const heroBottom = hero.offsetTop + hero.offsetHeight * 0.74;
			const show = y > heroBottom;
			stickyBuy.classList.toggle('is-visible', show);
			stickyBuy.setAttribute('aria-hidden', String(!show));
		}

		if (heroMediaFrame && y < window.innerHeight) {
			heroMediaFrame.style.transform = `translateY(${y * 0.04}px)`;
		}
	},
	{ passive: true }
);

if (revealEls.length) {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			});
		},
		{
			threshold: 0.14,
			rootMargin: '0px 0px -70px 0px',
		}
	);

	revealEls.forEach((el) => observer.observe(el));
}

if (productRender) {
	const productObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				productRender.classList.add('is-visible');
				productObserver.unobserve(productRender);
			});
		},
		{ threshold: 0.25 }
	);

	productObserver.observe(productRender);
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', (event) => {
		const id = anchor.getAttribute('href');
		if (!id || id === '#') return;
		const target = document.querySelector(id);
		if (!target) return;
		event.preventDefault();

		const offset = (header?.offsetHeight || 0) + 16;
		const top = target.getBoundingClientRect().top + window.scrollY - offset;
		window.scrollTo({ top, behavior: 'smooth' });
	});
});

document.querySelectorAll('.option').forEach((option) => {
	option.addEventListener('click', () => {
		const group = option.closest('.option-group');
		group?.querySelectorAll('.option').forEach((item) => {
			item.classList.toggle('is-active', item === option);
		});
	});
});

document.querySelectorAll('.thumb').forEach((thumb) => {
	thumb.addEventListener('click', () => {
		document.querySelectorAll('.thumb').forEach((item) => {
			item.classList.toggle('is-active', item === thumb);
		});

		if (!productRender) return;

		const nextSrc = thumb.dataset.heroSrc;
		const nextAlt = thumb.dataset.heroAlt || '';
		const nextMode = thumb.dataset.heroMode || 'photo';
		if (!nextSrc || productRender.getAttribute('src') === nextSrc) return;

		productRender.classList.add('is-swapping');

		window.setTimeout(() => {
			const finishSwap = () => {
				productRender.classList.remove('is-swapping');
			};

			productRender.addEventListener('load', finishSwap, { once: true });
			productRender.setAttribute('src', nextSrc);
			productRender.setAttribute('alt', nextAlt);
			productRender.classList.toggle('is-product', nextMode === 'product');
			productRender.classList.toggle('is-photo', nextMode !== 'product');

			window.setTimeout(finishSwap, 700);
		}, 140);
	});
});

document.querySelectorAll('.purchase-accordion > button').forEach((button) => {
	button.addEventListener('click', () => {
		const accordion = button.closest('.purchase-accordion');
		if (!accordion) return;

		const isOpen = accordion.classList.contains('is-open');

		// Close all other accordions in the same container to maintain premium compact height
		const container = accordion.closest('.purchase-accordions');
		if (container) {
			container.querySelectorAll('.purchase-accordion').forEach((item) => {
				if (item !== accordion) {
					item.classList.remove('is-open');
					item.querySelector('button')?.setAttribute('aria-expanded', 'false');
				}
			});
		}

		accordion.classList.toggle('is-open', !isOpen);
		button.setAttribute('aria-expanded', String(!isOpen));
	});
});
