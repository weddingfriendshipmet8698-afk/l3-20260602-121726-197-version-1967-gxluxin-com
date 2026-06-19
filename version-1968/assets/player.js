document.querySelectorAll('[data-player]').forEach((box) => {
  const video = box.querySelector('video');
  const button = box.querySelector('.play-overlay');
  const stream = box.getAttribute('data-stream');
  let ready = false;

  const attach = () => {
    if (ready || !video || !stream) {
      return;
    }
    ready = true;
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = stream;
    } else if (window.Hls && window.Hls.isSupported()) {
      const hls = new window.Hls({
        enableWorker: true,
        lowLatencyMode: true
      });
      hls.loadSource(stream);
      hls.attachMedia(video);
    } else {
      video.src = stream;
    }
  };

  const start = () => {
    attach();
    if (button) {
      button.classList.add('is-hidden');
    }
    video.play().catch(() => {});
  };

  if (button) {
    button.addEventListener('click', start);
  }
  video.addEventListener('click', () => {
    if (!ready) {
      start();
    }
  });
});
