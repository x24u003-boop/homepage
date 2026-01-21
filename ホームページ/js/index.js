const toggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('mobile-sidebar');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

// 開く
toggle.addEventListener('click', () => {
  sidebar.classList.add('active');
  overlay.classList.add('active');
});

// 閉じるボタン
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});

// オーバーレイクリックで閉じる
overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});


//ビデオ再生



const video = document.getElementById("intro-video");
const intro = document.getElementById("intro-container");
const main = document.getElementById("main-content");
const fadeWhite = document.getElementById("fade-white");
let fading = false;

video.addEventListener("timeupdate", () => {
  if (!video.duration) return; // duration 取得前は無視

  const remaining = video.duration - video.currentTime;

  // 残り1秒でフェードアウト（1回だけ）
  if (!fading && remaining <= 1) {
    fading = true;

    fadeWhite.style.opacity = 1;  // ← 白フェード開始

    setTimeout(() => {
      intro.style.display = "none";
      main.style.display = "block";
      document.body.style.overflow = "auto";
    }, 800);
  }
});

// ended が発火した場合も一応対応
video.addEventListener("ended", () => {
  if (!fading) {
    intro.style.display = "none";
    main.style.display = "block";
    document.body.style.overflow = "auto";
  }
});

