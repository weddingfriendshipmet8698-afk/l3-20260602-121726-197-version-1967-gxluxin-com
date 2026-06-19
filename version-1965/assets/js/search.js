(function () {
  function getQuery() {
    var params = new URLSearchParams(window.location.search);
    return params.get('q') || '';
  }

  function createCard(item) {
    var article = document.createElement('article');
    article.className = 'movie-card';
    article.setAttribute('data-movie-card', '');
    article.setAttribute('data-title', item.title);
    article.setAttribute('data-year', item.year);
    article.setAttribute('data-genre', item.genre);
    article.setAttribute('data-type', item.type);
    article.innerHTML = [
      '<a class="poster" href="' + item.url + '" style="--cover-image: url(\'' + item.cover + '\');" aria-label="查看' + item.title + '">',
      '  <span class="poster-year">' + item.year + '</span>',
      '  <span class="poster-type">' + item.type + '</span>',
      '  <span class="poster-play">▶</span>',
      '</a>',
      '<div class="movie-info">',
      '  <h3><a href="' + item.url + '">' + item.title + '</a></h3>',
      '  <p>' + item.oneLine + '</p>',
      '  <div class="tag-row">' + item.tags.map(function (tag) { return '<span>' + tag + '</span>'; }).join('') + '</div>',
      '  <div class="movie-meta"><span>' + item.region + '</span><span>' + item.category + '</span></div>',
      '</div>'
    ].join('');
    return article;
  }

  function render(query) {
    var input = document.querySelector('[data-global-search]');
    var results = document.querySelector('[data-search-results]');
    var heading = document.querySelector('[data-search-heading]');
    var count = document.querySelector('[data-search-count]');
    if (!results || !window.SEARCH_INDEX) {
      return;
    }
    if (input) {
      input.value = query;
    }
    var normalized = (query || '').trim().toLowerCase();
    if (!normalized) {
      return;
    }
    var matches = window.SEARCH_INDEX.filter(function (item) {
      return item.searchText.indexOf(normalized) !== -1;
    }).slice(0, 200);
    results.innerHTML = '';
    matches.forEach(function (item) {
      results.appendChild(createCard(item));
    });
    if (heading) {
      heading.textContent = '搜索结果';
    }
    if (count) {
      count.textContent = '找到 ' + matches.length + ' 条匹配内容，最多显示前 200 条。';
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var initial = getQuery();
    var input = document.querySelector('[data-global-search]');
    var button = document.querySelector('[data-run-search]');
    function run() {
      var query = input ? input.value : '';
      render(query);
      var url = new URL(window.location.href);
      if (query) {
        url.searchParams.set('q', query);
      } else {
        url.searchParams.delete('q');
      }
      window.history.replaceState(null, '', url.toString());
    }
    if (button) {
      button.addEventListener('click', run);
    }
    if (input) {
      input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
          run();
        }
      });
    }
    if (initial) {
      render(initial);
    }
  });
})();
