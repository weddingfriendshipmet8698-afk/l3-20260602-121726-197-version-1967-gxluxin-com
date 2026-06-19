import { H as Hls } from './hls.js';
import { MOVIE_INDEX } from './search-index.js';

const rootPrefix = document.body.dataset.root || '';

function withRoot(path) {
  if (!path) {
    return rootPrefix;
  }
  if (/^https?:\/\//.test(path)) {
    return path;
  }
  return `${rootPrefix}${path}`;
}

function textOf(value) {
  return String(value || '').toLowerCase();
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return map[char] || char;
  });
}

function setupMobileNav() {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-mobile-nav]');
  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.hidden = expanded;
  });
}

function setupHeroSlider() {
  const slider = document.querySelector('[data-hero-slider]');
  if (!slider) {
    return;
  }

  const slides = Array.from(slider.querySelectorAll('[data-hero-slide]'));
  const dots = Array.from(slider.querySelectorAll('[data-hero-dot]'));
  if (!slides.length) {
    return;
  }

  let current = 0;
  let timer = null;

  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('is-active', slideIndex === current);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === current);
    });
  }

  function start() {
    stop();
    timer = window.setInterval(() => show(current + 1), 5200);
  }

  function stop() {
    if (timer) {
      window.clearInterval(timer);
    }
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      show(Number(dot.dataset.heroDot || 0));
      start();
    });
  });

  slider.addEventListener('mouseenter', stop);
  slider.addEventListener('mouseleave', start);
  show(0);
  start();
}

function setupImageFallbacks() {
  document.querySelectorAll('img').forEach((image) => {
    image.addEventListener('error', () => {
      image.classList.add('image-missing');
      image.alt = image.alt || '影片图片';
    }, { once: true });
  });
}

function setupCardFilters() {
  const form = document.querySelector('[data-filter-form]');
  const grid = document.querySelector('[data-card-grid]');
  if (!form || !grid) {
    return;
  }

  const keywordInput = form.querySelector('[data-filter-keyword]');
  const regionSelect = form.querySelector('[data-filter-region]');
  const typeSelect = form.querySelector('[data-filter-type]');
  const yearSelect = form.querySelector('[data-filter-year]');
  const count = document.querySelector('[data-filter-count]');
  const cards = Array.from(grid.querySelectorAll('[data-movie-card]'));

  function apply() {
    const keyword = textOf(keywordInput?.value);
    const region = textOf(regionSelect?.value);
    const type = textOf(typeSelect?.value);
    const year = textOf(yearSelect?.value);
    let visible = 0;

    cards.forEach((card) => {
      const haystack = [
        card.dataset.title,
        card.dataset.region,
        card.dataset.type,
        card.dataset.year,
        card.dataset.genre,
        card.dataset.tags,
      ].map(textOf).join(' ');

      const matchedKeyword = !keyword || haystack.includes(keyword);
      const matchedRegion = !region || textOf(card.dataset.region) === region;
      const matchedType = !type || textOf(card.dataset.type) === type;
      const matchedYear = !year || textOf(card.dataset.year) === year;
      const matched = matchedKeyword && matchedRegion && matchedType && matchedYear;
      card.classList.toggle('is-hidden', !matched);
      if (matched) {
        visible += 1;
      }
    });

    if (count) {
      count.textContent = `当前显示 ${visible} / ${cards.length} 部影片。`;
    }
  }

  [keywordInput, regionSelect, typeSelect, yearSelect].forEach((field) => {
    if (field) {
      field.addEventListener('input', apply);
      field.addEventListener('change', apply);
    }
  });

  apply();
}

function movieMatches(movie, keyword, type, region) {
  const haystack = [
    movie.title,
    movie.region,
    movie.type,
    movie.year,
    movie.genre,
    movie.oneLine,
    (movie.tags || []).join(' '),
  ].map(textOf).join(' ');

  return (!keyword || haystack.includes(keyword))
    && (!type || textOf(movie.type) === type)
    && (!region || textOf(movie.region) === region);
}

function movieCardTemplate(movie) {
  const title = escapeHtml(movie.title);
  const region = escapeHtml(movie.region);
  const type = escapeHtml(movie.type);
  const year = escapeHtml(movie.year);
  const oneLine = escapeHtml(movie.oneLine);
  const rating = escapeHtml(movie.rating);
  const tags = (movie.tags || []).slice(0, 3).map((tag) => `<span>${escapeHtml(tag)}</span>`).join('');
  return `
    <article class="movie-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <a class="block" href="${withRoot(movie.url)}" aria-label="观看 ${title}">
        <div class="poster-wrap relative overflow-hidden aspect-[4/3]">
          <img src="${withRoot(movie.image)}" alt="${title} 海报" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
          <div class="poster-overlay absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
            <span class="play-badge" aria-hidden="true">▶</span>
          </div>
          <div class="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">${region}</div>
          <div class="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs">${year}</div>
        </div>
        <div class="p-5">
          <h2 class="font-bold text-lg text-gray-800 mb-2 group-hover:text-amber-600 transition-colors line-clamp-1">${title}</h2>
          <p class="text-gray-600 text-sm mb-3 line-clamp-2">${oneLine}</p>
          <div class="movie-tags">${tags}</div>
          <div class="flex items-center justify-between mt-3">
            <span class="text-sm font-semibold text-gray-700">${rating} 分</span>
            <span class="text-xs text-gray-500">${type}</span>
          </div>
        </div>
      </a>
    </article>`;
}

function setupLiveSearch() {
  const input = document.querySelector('[data-live-search-input]');
  const results = document.querySelector('[data-live-search-results]');
  if (!input || !results) {
    return;
  }

  function render() {
    const keyword = textOf(input.value);
    if (!keyword) {
      results.innerHTML = '';
      return;
    }

    const matched = MOVIE_INDEX
      .filter((movie) => movieMatches(movie, keyword, '', ''))
      .slice(0, 6);

    if (!matched.length) {
      results.innerHTML = '<p class="text-gray-500 text-sm">未找到匹配影片。</p>';
      return;
    }

    results.innerHTML = matched.map((movie) => {
      const title = escapeHtml(movie.title);
      const region = escapeHtml(movie.region);
      const type = escapeHtml(movie.type);
      const year = escapeHtml(movie.year);
      return `
        <a class="live-search-item" href="${withRoot(movie.url)}">
          <img src="${withRoot(movie.image)}" alt="${title} 海报" loading="lazy">
          <span>
            <strong>${title}</strong>
            <span>${region} · ${type} · ${year}</span>
          </span>
        </a>`;
    }).join('');
  }

  input.addEventListener('input', render);
}

function setupSearchPage() {
  const panel = document.querySelector('[data-search-page]');
  const results = document.querySelector('[data-search-page-results]');
  if (!panel || !results) {
    return;
  }

  const input = panel.querySelector('[data-search-page-input]');
  const typeSelect = panel.querySelector('[data-search-page-type]');
  const regionSelect = panel.querySelector('[data-search-page-region]');
  const count = panel.querySelector('[data-search-page-count]');
  const params = new URLSearchParams(window.location.search);
  const initialKeyword = params.get('q') || '';
  if (initialKeyword && input) {
    input.value = initialKeyword;
  }

  function render() {
    const keyword = textOf(input?.value);
    const type = textOf(typeSelect?.value);
    const region = textOf(regionSelect?.value);
    const matched = MOVIE_INDEX.filter((movie) => movieMatches(movie, keyword, type, region));
    const visible = matched.slice(0, 500);
    results.innerHTML = visible.map(movieCardTemplate).join('');
    if (count) {
      count.textContent = `找到 ${matched.length} 部影片，当前展示 ${visible.length} 部。`;
    }
  }

  [input, typeSelect, regionSelect].forEach((field) => {
    if (field) {
      field.addEventListener('input', render);
      field.addEventListener('change', render);
    }
  });

  render();
}

function setupPlayers() {
  document.querySelectorAll('video[data-hls]').forEach((video) => {
    const frame = video.closest('.video-frame');
    const trigger = frame?.querySelector('[data-play-trigger]');
    const message = frame?.querySelector('[data-player-message]');
    const source = video.dataset.hls;
    let loaded = false;
    let hls = null;

    function showMessage(text) {
      if (!message) {
        return;
      }
      message.hidden = false;
      message.textContent = text;
    }

    function hideOverlay() {
      if (trigger) {
        trigger.classList.add('is-hidden');
      }
    }

    function loadSource() {
      if (loaded || !source) {
        return;
      }

      if (Hls && Hls.isSupported()) {
        hls = new Hls({
          enableWorker: true,
          lowLatencyMode: false,
        });
        hls.loadSource(source);
        hls.attachMedia(video);
        hls.on(Hls.Events.ERROR, (event, data) => {
          if (!data || !data.fatal) {
            return;
          }
          if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
            showMessage('网络错误，正在尝试重新加载视频。');
            hls.startLoad();
          } else if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
            showMessage('媒体错误，正在尝试恢复播放。');
            hls.recoverMediaError();
          } else {
            showMessage('当前浏览器无法播放该视频源。');
            hls.destroy();
          }
        });
        loaded = true;
        return;
      }

      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = source;
        loaded = true;
        return;
      }

      showMessage('您的浏览器不支持 HLS 视频播放。');
    }

    async function playVideo() {
      loadSource();
      hideOverlay();
      try {
        await video.play();
      } catch (error) {
        showMessage('播放被浏览器拦截，请再次点击播放按钮。');
      }
    }

    if (trigger) {
      trigger.addEventListener('click', playVideo);
    }

    video.addEventListener('click', () => {
      if (video.paused) {
        playVideo();
      }
    });

    video.addEventListener('play', hideOverlay);
    video.addEventListener('loadeddata', () => {
      if (message) {
        message.hidden = true;
      }
    });

    window.addEventListener('beforeunload', () => {
      if (hls) {
        hls.destroy();
      }
    });
  });
}

setupMobileNav();
setupHeroSlider();
setupImageFallbacks();
setupCardFilters();
setupLiveSearch();
setupSearchPage();
setupPlayers();
