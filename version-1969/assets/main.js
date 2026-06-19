function setupMenu() {
  const button = document.querySelector('[data-menu-toggle]');
  const panel = document.querySelector('[data-nav-panel]');
  if (!button || !panel) {
    return;
  }
  button.addEventListener('click', () => {
    panel.classList.toggle('open');
  });
}

function setupHero() {
  const carousel = document.querySelector('[data-hero-carousel]');
  if (!carousel) {
    return;
  }
  const slides = Array.from(carousel.querySelectorAll('[data-hero-slide]'));
  const dots = Array.from(carousel.querySelectorAll('[data-hero-dot]'));
  if (slides.length <= 1) {
    return;
  }
  let current = 0;
  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('active', slideIndex === current);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === current);
    });
  };
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => show(index));
  });
  window.setInterval(() => show(current + 1), 5600);
}

function normalizeText(value) {
  return String(value || '').trim().toLowerCase();
}

function setupCardFilter() {
  const input = document.querySelector('[data-card-filter]');
  const cards = Array.from(document.querySelectorAll('[data-movie-card]'));
  if (!input || cards.length === 0) {
    return;
  }
  const params = new URLSearchParams(window.location.search);
  const initial = params.get('q');
  if (initial) {
    input.value = initial;
  }
  const apply = () => {
    const keyword = normalizeText(input.value);
    cards.forEach((card) => {
      const text = normalizeText(card.getAttribute('data-search'));
      card.classList.toggle('is-filtered-out', keyword !== '' && !text.includes(keyword));
    });
  };
  input.addEventListener('input', apply);
  apply();
}

function setupFilterChips() {
  const input = document.querySelector('[data-card-filter]');
  const chips = Array.from(document.querySelectorAll('[data-filter-chip]'));
  if (!input || chips.length === 0) {
    return;
  }
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      input.value = chip.getAttribute('data-filter-chip') || '';
      input.dispatchEvent(new Event('input'));
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupMenu();
  setupHero();
  setupCardFilter();
  setupFilterChips();
});
