(function () {
  function bindPlayer(shell) {
    var video = shell.querySelector('video');
    var button = shell.querySelector('.play-overlay');
    var stream = shell.getAttribute('data-stream');
    var hls = null;

    if (!video || !button || !stream) {
      return;
    }

    function attachStream() {
      if (video.getAttribute('data-ready') === 'true') {
        return;
      }

      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = stream;
      } else if (window.Hls && window.Hls.isSupported()) {
        hls = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true
        });
        hls.loadSource(stream);
        hls.attachMedia(video);
      } else {
        video.src = stream;
      }

      video.setAttribute('data-ready', 'true');
    }

    function startVideo() {
      attachStream();
      shell.classList.add('is-playing');
      var playPromise = video.play();

      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(function () {
          video.controls = true;
        });
      }
    }

    button.addEventListener('click', startVideo);

    video.addEventListener('play', function () {
      shell.classList.add('is-playing');
    });

    video.addEventListener('pause', function () {
      if (!video.ended) {
        shell.classList.remove('is-playing');
      }
    });

    video.addEventListener('ended', function () {
      shell.classList.remove('is-playing');
    });

    video.addEventListener('click', function () {
      if (video.paused) {
        startVideo();
      }
    });

    window.addEventListener('beforeunload', function () {
      if (hls && typeof hls.destroy === 'function') {
        hls.destroy();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.slice.call(document.querySelectorAll('.player-shell')).forEach(bindPlayer);
  });
})();
