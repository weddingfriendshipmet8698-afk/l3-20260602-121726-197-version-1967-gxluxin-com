(function () {
  function initPlayer() {
    var card = document.querySelector('[data-player]');
    if (!card) {
      return;
    }
    var video = card.querySelector('.js-hls-player');
    var button = card.querySelector('[data-play-button]');
    var source = card.getAttribute('data-src');
    var hlsInstance = null;
    var loaded = false;

    function loadAndPlay() {
      if (!video || !source) {
        return;
      }
      if (!loaded) {
        if (window.Hls && window.Hls.isSupported()) {
          hlsInstance = new window.Hls({
            enableWorker: true,
            lowLatencyMode: true
          });
          hlsInstance.loadSource(source);
          hlsInstance.attachMedia(video);
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = source;
        } else {
          video.src = source;
        }
        loaded = true;
      }
      card.classList.add('is-playing');
      var playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(function () {
          card.classList.remove('is-playing');
        });
      }
    }

    if (button) {
      button.addEventListener('click', loadAndPlay);
    }
    video.addEventListener('play', function () {
      card.classList.add('is-playing');
    });
    video.addEventListener('pause', function () {
      if (video.currentTime === 0 || video.ended) {
        card.classList.remove('is-playing');
      }
    });
    window.addEventListener('beforeunload', function () {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initPlayer);
})();
