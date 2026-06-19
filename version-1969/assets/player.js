import { H as Hls } from './hls-vendor.js';

function preparePlayer(root) {
  const video = root.querySelector('video');
  const cover = root.querySelector('[data-play-cover]');
  const source = video ? video.getAttribute('data-src') : '';
  let started = false;
  let hls = null;

  if (!video || !source) {
    return;
  }

  const bindSource = () => {
    if (video.src || hls) {
      return;
    }
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = source;
      return;
    }
    if (Hls && Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true
      });
      hls.loadSource(source);
      hls.attachMedia(video);
      return;
    }
    video.src = source;
  };

  const play = () => {
    bindSource();
    if (cover) {
      cover.classList.add('is-hidden');
    }
    started = true;
    const attempt = video.play();
    if (attempt && typeof attempt.catch === 'function') {
      attempt.catch(() => {});
    }
  };

  if (cover) {
    cover.addEventListener('click', play);
  }

  video.addEventListener('click', () => {
    if (!started) {
      play();
    }
  });

  video.addEventListener('play', () => {
    if (cover) {
      cover.classList.add('is-hidden');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-player]').forEach(preparePlayer);
});
