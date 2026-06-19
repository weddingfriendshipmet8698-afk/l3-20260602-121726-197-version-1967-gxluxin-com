(function () {
  var navButton = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (navButton && nav) {
    navButton.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var slides = Array.prototype.slice.call(
    document.querySelectorAll(".hero-slide"),
  );
  var dots = Array.prototype.slice.call(document.querySelectorAll(".hero-dot"));
  var activeIndex = 0;

  function showSlide(index) {
    if (!slides.length) {
      return;
    }
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach(function (slide, slideIndex) {
      slide.classList.toggle("active", slideIndex === activeIndex);
    });
    dots.forEach(function (dot, dotIndex) {
      dot.classList.toggle("active", dotIndex === activeIndex);
    });
  }

  dots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
      showSlide(index);
    });
  });

  if (slides.length > 1) {
    setInterval(function () {
      showSlide(activeIndex + 1);
    }, 5200);
  }

  var searchInputs = Array.prototype.slice.call(
    document.querySelectorAll(".movie-search"),
  );
  searchInputs.forEach(function (input) {
    input.addEventListener("input", function () {
      var panel = input.closest(".section-panel") || document;
      var keyword = input.value.trim().toLowerCase();
      var cards = Array.prototype.slice.call(
        panel.querySelectorAll(".movie-card"),
      );
      cards.forEach(function (card) {
        var content = (
          card.getAttribute("data-search") ||
          card.textContent ||
          ""
        ).toLowerCase();
        card.hidden = keyword.length > 0 && content.indexOf(keyword) === -1;
      });
    });
  });

  var sortButtons = Array.prototype.slice.call(
    document.querySelectorAll(".sort-year"),
  );
  sortButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var panel = button.closest(".section-panel") || document;
      var grid =
        panel.querySelector(".movie-grid") || panel.querySelector(".rank-list");
      if (!grid) {
        return;
      }
      var cards = Array.prototype.slice.call(
        grid.querySelectorAll(".movie-card"),
      );
      cards.sort(function (a, b) {
        var ay = parseInt(a.getAttribute("data-year"), 10) || 0;
        var by = parseInt(b.getAttribute("data-year"), 10) || 0;
        return by - ay;
      });
      cards.forEach(function (card) {
        grid.appendChild(card);
      });
    });
  });
})();
