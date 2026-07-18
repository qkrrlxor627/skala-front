// 옆 파일에서 날씨 가져오는 함수를 불러온다
import { getWeather } from "./weatherAPI.js";

// 1) 도시 목록 (이름 / 위도 / 경도)
const cities = [
  { name: "대한민국 서울 KR", lat: 37.5665, lon: 126.978 },
  { name: "일본 도쿄 JP", lat: 35.6895, lon: 139.6917 },
  { name: "프랑스 파리 FR", lat: 48.85, lon: 2.35 },
  { name: "미국 뉴욕 US", lat: 40.7128, lon: -74.006 },
  { name: "호주 시드니 AU", lat: -33.8688, lon: 151.2093 },
];

// 2) 화면 요소 2개를 미리 찾아둔다
const selectEl = document.getElementById("city-select"); // 도시를 고르는 드롭다운
const boxEl = document.getElementById("weather-box"); // 결과가 보일 상자

// 3) 드롭다운(<select>)에 도시들을 하나씩 넣는다
function renderOptions() {
  for (let i = 0; i < cities.length; i++) {
    const city = cities[i];

    const option = document.createElement("option");
    option.value = i;
    option.textContent = city.name;

    selectEl.appendChild(option);
  }
}

// 4) 요청하는 동안 "로딩 중" 문구를 보여준다
function renderLoading() {
  boxEl.innerHTML = "실시간 날씨 로딩 중... ⏳";
}

// 5) 도시 이름 + 현재 기온/습도를 상자에 그린다
function renderWeather(city, weather) {
  boxEl.innerHTML =
    `<strong>${city.name}</strong><br />` +
    `🌡 현재 기온: ${weather.temp}°C<br />` +
    `💧 현재 습도: ${weather.humidity}%`;
}

// 6) 실패했을 때 에러 문구를 상자에 그린다
function renderError(message) {
  boxEl.innerHTML = `❌ 날씨를 가져오지 못했습니다: ${message}`;
}

// 7) 전체 순서를 묶은 함수: 로딩 → 날씨 요청 → 결과 그리기
async function onCityChange(city) {
  renderLoading();

  try {
    const weather = await getWeather(city.lat, city.lon);
    renderWeather(city, weather);
  } catch (err) {
    renderError(err.message);
  }
}

// 8) 드롭다운을 바꾸면 그 도시의 날씨를 불러온다
selectEl.addEventListener("change", function (e) {
  const index = e.target.value;
  const city = cities[index];
  onCityChange(city);
});

// 9) 페이지가 처음 열릴 때
renderOptions();
onCityChange(cities[0]);
