(function () {
    function selectAll(selector, root) {
        return Array.prototype.slice.call((root || document).querySelectorAll(selector));
    }

    function initMobileNav() {
        var button = document.querySelector('[data-nav-toggle]');
        var panel = document.querySelector('[data-mobile-panel]');
        if (!button || !panel) {
            return;
        }
        button.addEventListener('click', function () {
            panel.classList.toggle('open');
            button.setAttribute('aria-expanded', panel.classList.contains('open') ? 'true' : 'false');
        });
    }

    function initHeroSlider() {
        var slider = document.querySelector('[data-hero-slider]');
        if (!slider) {
            return;
        }
        var slides = selectAll('[data-hero-slide]', slider);
        var dots = selectAll('[data-hero-dot]', slider);
        var previous = slider.querySelector('[data-hero-prev]');
        var next = slider.querySelector('[data-hero-next]');
        var index = 0;
        var timer;

        function showSlide(target) {
            if (!slides.length) {
                return;
            }
            index = (target + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle('is-active', slideIndex === index);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle('is-active', dotIndex === index);
            });
        }

        function startTimer() {
            window.clearInterval(timer);
            timer = window.setInterval(function () {
                showSlide(index + 1);
            }, 5000);
        }

        if (previous) {
            previous.addEventListener('click', function () {
                showSlide(index - 1);
                startTimer();
            });
        }

        if (next) {
            next.addEventListener('click', function () {
                showSlide(index + 1);
                startTimer();
            });
        }

        dots.forEach(function (dot, dotIndex) {
            dot.addEventListener('click', function () {
                showSlide(dotIndex);
                startTimer();
            });
        });

        showSlide(0);
        startTimer();
    }

    function initMovieFilters() {
        selectAll('[data-filter-scope]').forEach(function (scope) {
            var input = scope.querySelector('[data-filter-input]');
            var select = scope.querySelector('[data-filter-select]');
            var cards = selectAll('[data-filter-item]', scope);
            var empty = scope.querySelector('[data-empty-state]');
            var params = new URLSearchParams(window.location.search);
            var queryFromUrl = params.get('q');

            if (input && queryFromUrl) {
                input.value = queryFromUrl;
            }

            function applyFilter() {
                var query = input ? input.value.trim().toLowerCase() : '';
                var typeValue = select ? select.value : '';
                var visible = 0;

                cards.forEach(function (card) {
                    var text = (card.getAttribute('data-filter') || '').toLowerCase();
                    var type = card.getAttribute('data-type') || '';
                    var matchedText = !query || text.indexOf(query) !== -1;
                    var matchedType = !typeValue || type === typeValue;
                    var show = matchedText && matchedType;
                    card.style.display = show ? '' : 'none';
                    if (show) {
                        visible += 1;
                    }
                });

                if (empty) {
                    empty.classList.toggle('is-visible', visible === 0);
                }
            }

            if (input) {
                input.addEventListener('input', applyFilter);
            }
            if (select) {
                select.addEventListener('change', applyFilter);
            }
            applyFilter();
        });
    }

    window.initMoviePlayer = function (options) {
        var video = document.getElementById(options.videoId);
        var button = document.getElementById(options.buttonId);
        var cover = document.getElementById(options.coverId);
        var message = document.getElementById(options.messageId);
        var hlsInstance;
        var started = false;

        if (!video || !button) {
            return;
        }

        function showMessage() {
            if (message) {
                message.textContent = '播放暂时不可用，请稍后重试';
                message.classList.add('is-visible');
            }
        }

        function hideCover() {
            if (cover) {
                cover.classList.add('is-hidden');
            }
        }

        function playVideo() {
            var playResult = video.play();
            if (playResult && typeof playResult.catch === 'function') {
                playResult.catch(function () {});
            }
        }

        function start() {
            hideCover();
            if (started) {
                playVideo();
                return;
            }
            started = true;

            if (window.Hls && window.Hls.isSupported()) {
                hlsInstance = new window.Hls({
                    enableWorker: true,
                    lowLatencyMode: true
                });
                hlsInstance.loadSource(options.url);
                hlsInstance.attachMedia(video);
                hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, function () {
                    playVideo();
                });
                hlsInstance.on(window.Hls.Events.ERROR, function (event, data) {
                    if (data && data.fatal) {
                        showMessage();
                    }
                });
                return;
            }

            if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = options.url;
                video.addEventListener('loadedmetadata', playVideo, { once: true });
                video.load();
                return;
            }

            video.src = options.url;
            video.load();
            playVideo();
        }

        button.addEventListener('click', start);
        video.addEventListener('click', function () {
            if (!started && video.paused) {
                start();
            }
        });
        video.addEventListener('play', hideCover);
        video.addEventListener('error', showMessage);
        window.addEventListener('beforeunload', function () {
            if (hlsInstance) {
                hlsInstance.destroy();
            }
        });
    };

    document.addEventListener('DOMContentLoaded', function () {
        initMobileNav();
        initHeroSlider();
        initMovieFilters();
    });
}());
