document.addEventListener("DOMContentLoaded", function () {
    var menuToggle = document.querySelector("[data-menu-toggle]");
    var mobileMenu = document.querySelector("[data-mobile-menu]");

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", function () {
            mobileMenu.classList.toggle("is-open");
        });
    }

    document.querySelectorAll("[data-hero-slider]").forEach(function (slider) {
        var slides = Array.prototype.slice.call(slider.querySelectorAll("[data-hero-slide]"));
        var dots = Array.prototype.slice.call(slider.querySelectorAll("[data-hero-dot]"));
        var prev = slider.querySelector("[data-hero-prev]");
        var next = slider.querySelector("[data-hero-next]");
        var index = 0;
        var timer = null;

        function show(nextIndex) {
            if (!slides.length) {
                return;
            }

            index = (nextIndex + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle("is-active", slideIndex === index);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle("is-active", dotIndex === index);
            });
        }

        function start() {
            stop();
            timer = window.setInterval(function () {
                show(index + 1);
            }, 5200);
        }

        function stop() {
            if (timer) {
                window.clearInterval(timer);
            }
        }

        if (prev) {
            prev.addEventListener("click", function () {
                show(index - 1);
                start();
            });
        }

        if (next) {
            next.addEventListener("click", function () {
                show(index + 1);
                start();
            });
        }

        dots.forEach(function (dot, dotIndex) {
            dot.addEventListener("click", function () {
                show(dotIndex);
                start();
            });
        });

        slider.addEventListener("mouseenter", stop);
        slider.addEventListener("mouseleave", start);
        show(0);
        start();
    });

    document.querySelectorAll("[data-filter-form]").forEach(function (panel) {
        var section = panel.parentElement;
        var input = panel.querySelector("[data-search-input]");
        var typeSelect = panel.querySelector("[data-type-filter]");
        var yearSelect = panel.querySelector("[data-year-filter]");
        var cards = Array.prototype.slice.call(section.querySelectorAll("[data-movie-card]"));
        var empty = section.querySelector("[data-empty-state]");

        function applyFilter() {
            var keyword = input ? input.value.trim().toLowerCase() : "";
            var selectedType = typeSelect ? typeSelect.value : "all";
            var selectedYear = yearSelect ? yearSelect.value : "all";
            var visible = 0;

            cards.forEach(function (card) {
                var text = (card.getAttribute("data-search") || "").toLowerCase();
                var type = card.getAttribute("data-type") || "";
                var year = card.getAttribute("data-year") || "";
                var matched = true;

                if (keyword && text.indexOf(keyword) === -1) {
                    matched = false;
                }

                if (selectedType !== "all" && type !== selectedType) {
                    matched = false;
                }

                if (selectedYear !== "all" && year !== selectedYear) {
                    matched = false;
                }

                card.style.display = matched ? "" : "none";
                if (matched) {
                    visible += 1;
                }
            });

            if (empty) {
                empty.classList.toggle("is-visible", visible === 0);
            }
        }

        if (input) {
            input.addEventListener("input", applyFilter);
        }

        if (typeSelect) {
            typeSelect.addEventListener("change", applyFilter);
        }

        if (yearSelect) {
            yearSelect.addEventListener("change", applyFilter);
        }
    });

    document.querySelectorAll("[data-stream]").forEach(function (shell) {
        var stream = shell.getAttribute("data-stream");
        var video = shell.querySelector("video");
        var cover = shell.querySelector(".player-cover");
        var loaded = false;
        var hlsInstance = null;

        function loadVideo() {
            if (!video || !stream || loaded) {
                return;
            }

            loaded = true;

            if (video.canPlayType("application/vnd.apple.mpegurl")) {
                video.src = stream;
                video.load();
                return;
            }

            if (window.Hls && window.Hls.isSupported()) {
                hlsInstance = new window.Hls({ enableWorker: true });
                hlsInstance.loadSource(stream);
                hlsInstance.attachMedia(video);
                return;
            }

            video.src = stream;
            video.load();
        }

        function playVideo() {
            loadVideo();

            if (cover) {
                cover.classList.add("is-hidden");
            }

            var promise = video.play();
            if (promise && promise.catch) {
                promise.catch(function () {});
            }
        }

        if (cover) {
            cover.addEventListener("click", playVideo);
        }

        if (video) {
            video.addEventListener("click", function () {
                if (video.paused) {
                    playVideo();
                }
            });

            video.addEventListener("play", function () {
                if (cover) {
                    cover.classList.add("is-hidden");
                }
            });
        }

        window.addEventListener("beforeunload", function () {
            if (hlsInstance) {
                hlsInstance.destroy();
            }
        });
    });
});
