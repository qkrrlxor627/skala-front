// 배경음악: 페이지가 열리면 자동재생 시도
const bgm = document.getElementById("bgm");
if (bgm) {
  bgm.volume = 0.6; // 볼륨 60% (너무 크지 않게)
  const playBgm = () => bgm.play().catch(() => {});
  playBgm(); // 열자마자 재생 시도

  // 브라우저가 자동재생을 막았다면 → 첫 클릭/키 입력 때 재생
  const startOnce = () => {
    playBgm();
    document.removeEventListener("pointerdown", startOnce);
    document.removeEventListener("keydown", startOnce);
  };
  document.addEventListener("pointerdown", startOnce);
  document.addEventListener("keydown", startOnce);
}
