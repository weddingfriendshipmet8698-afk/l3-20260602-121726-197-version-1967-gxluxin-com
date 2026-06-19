(() => {
  const navButton = document.querySelector('[data-nav-toggle]');
  const navMenu = document.querySelector('[data-nav-menu]');
  if (navButton && navMenu) {
    navButton.addEventListener('click', () => {
      navMenu.classList.toggle('is-open');
    });
  }

  const slides = Array.from(document.querySelectorAll('[data-hero-slide]'));
  const dots = Array.from(document.querySelectorAll('[data-hero-dot]'));
  if (slides.length > 0) {
    let index = 0;
    const show = (next) => {
      slides[index].classList.remove('is-active');
      dots[index]?.classList.remove('is-active');
      index = next;
      slides[index].classList.add('is-active');
      dots[index]?.classList.add('is-active');
    };
    dots.forEach((dot, dotIndex) => {
      dot.addEventListener('click', () => show(dotIndex));
    });
    window.setInterval(() => {
      show((index + 1) % slides.length);
    }, 5200);
  }

  const filterInputs = Array.from(document.querySelectorAll('[data-filter-input]'));
  filterInputs.forEach((input) => {
    const cards = Array.from(document.querySelectorAll('[data-card]'));
    input.addEventListener('input', () => {
      const value = input.value.trim().toLowerCase();
      cards.forEach((card) => {
        const haystack = [
          card.dataset.title || '',
          card.dataset.genre || '',
          card.dataset.year || '',
          card.dataset.region || ''
        ].join(' ').toLowerCase();
        card.style.display = haystack.includes(value) ? '' : 'none';
      });
    });
  });
})();
