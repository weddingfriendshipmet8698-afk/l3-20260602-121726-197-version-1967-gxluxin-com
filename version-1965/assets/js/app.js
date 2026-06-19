(function () {
  function initMenu() {
    var button = document.querySelector('[data-menu-toggle]');
    var nav = document.querySelector('[data-main-nav]');
    if (!button || !nav) {
      return;
    }
    button.addEventListener('click', function () {
      nav.classList.toggle('is-open');
    });
  }

  function initHero() {
    var slides = Array.prototype.slice.call(document.querySelectorAll('[data-hero-slide]'));
    var dots = Array.prototype.slice.call(document.querySelectorAll('[data-hero-dot]'));
    if (!slides.length) {
      return;
    }
    var current = 0;
    var timer = null;

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('is-active', slideIndex === current);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('is-active', dotIndex === current);
      });
    }

    function start() {
      timer = window.setInterval(function () {
        show(current + 1);
      }, 5200);
    }

    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        window.clearInterval(timer);
        show(index);
        start();
      });
    });

    show(0);
    start();
  }

  function initLocalSearch() {
    var input = document.querySelector('[data-local-search]');
    var cards = Array.prototype.slice.call(document.querySelectorAll('[data-movie-card]'));
    var empty = document.querySelector('[data-empty-state]');
    var yearButtons = Array.prototype.slice.call(document.querySelectorAll('[data-filter-year]'));
    var activeYear = 'all';

    function apply() {
      var query = input ? input.value.trim().toLowerCase() : '';
      var shown = 0;
      cards.forEach(function (card) {
        var text = [
          card.getAttribute('data-title'),
          card.getAttribute('data-year'),
          card.getAttribute('data-genre'),
          card.getAttribute('data-type')
        ].join(' ').toLowerCase();
        var year = card.getAttribute('data-year') || '';
        var matchText = !query || text.indexOf(query) !== -1;
        var matchYear = activeYear === 'all' || year === activeYear;
        var visible = matchText && matchYear;
        card.hidden = !visible;
        if (visible) {
          shown += 1;
        }
      });
      if (empty) {
        empty.hidden = shown > 0;
      }
    }

    if (input) {
      input.addEventListener('input', apply);
    }
    yearButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        activeYear = button.getAttribute('data-filter-year') || 'all';
        yearButtons.forEach(function (item) {
          item.classList.toggle('is-active', item === button);
        });
        apply();
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMenu();
    initHero();
    initLocalSearch();
  });
})();
