(function () {
  var menuButton = document.querySelector('.menu-toggle');
  var mobileMenu = document.querySelector('.mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  var hero = document.querySelector('.hero-carousel');

  if (hero) {
    var slides = Array.prototype.slice.call(hero.querySelectorAll('.hero-slide'));
    var dots = Array.prototype.slice.call(hero.querySelectorAll('.hero-dot'));
    var prev = hero.querySelector('.hero-prev');
    var next = hero.querySelector('.hero-next');
    var current = 0;
    var timer = null;

    function showSlide(index) {
      if (!slides.length) {
        return;
      }

      current = (index + slides.length) % slides.length;

      slides.forEach(function (slide, slideIndex) {
        var active = slideIndex === current;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', active ? 'false' : 'true');
      });

      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('is-active', dotIndex === current);
      });
    }

    function startHero() {
      window.clearInterval(timer);
      timer = window.setInterval(function () {
        showSlide(current + 1);
      }, 6500);
    }

    if (prev) {
      prev.addEventListener('click', function () {
        showSlide(current - 1);
        startHero();
      });
    }

    if (next) {
      next.addEventListener('click', function () {
        showSlide(current + 1);
        startHero();
      });
    }

    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        showSlide(index);
        startHero();
      });
    });

    showSlide(0);
    startHero();
  }

  var filterPanels = Array.prototype.slice.call(document.querySelectorAll('.filter-panel'));

  filterPanels.forEach(function (panel) {
    var input = panel.querySelector('.filter-input');
    var typeSelect = panel.querySelector('.filter-type');
    var yearSelect = panel.querySelector('.filter-year');
    var scope = panel.parentElement || document;
    var cards = Array.prototype.slice.call(scope.querySelectorAll('.movie-card'));

    function applyFilter() {
      var keyword = input ? input.value.trim().toLowerCase() : '';
      var type = typeSelect ? typeSelect.value : '';
      var year = yearSelect ? yearSelect.value : '';

      cards.forEach(function (card) {
        var haystack = (card.getAttribute('data-search') || '').toLowerCase();
        var cardType = card.getAttribute('data-type') || '';
        var cardYear = card.getAttribute('data-year') || '';
        var matchedKeyword = !keyword || haystack.indexOf(keyword) !== -1;
        var matchedType = !type || cardType === type;
        var matchedYear = !year || cardYear === year;
        card.classList.toggle('is-hidden-by-filter', !(matchedKeyword && matchedType && matchedYear));
      });
    }

    [input, typeSelect, yearSelect].forEach(function (control) {
      if (control) {
        control.addEventListener('input', applyFilter);
        control.addEventListener('change', applyFilter);
      }
    });
  });
})();
