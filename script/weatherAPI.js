const BASE_URL = "https://api.open-meteo.com/v1/forecast";

// 위도(lat)·경도(lon)를 받아 현재 기온·습도를 돌려주는 함수
export async function getWeather(lat, lon) {
  // 1) 좌표를 붙여 실제로 요청할 주소를 만든다
  const url = `${BASE_URL}?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m`;

  // 2) 인터넷에 요청을 보내고 응답이 올 때까지 기다린다
  const res = await fetch(url);

  // 3) 응답이 정상이 아니면(404 등) 에러를 던져 호출한 쪽 catch로 넘긴다
  //    (fetch는 404 같은 에러에도 그냥 통과하므로 이 검사가 꼭 필요하다)
  if (!res.ok) {
    throw new Error(`날씨 요청 실패 (HTTP ${res.status})`);
  }

  // 4) 응답 본문을 JSON으로 바꾼다
  const data = await res.json();

  // 5) 화면에 필요한 값(기온·습도)만 골라서 돌려준다
  return {
    temp: data.current.temperature_2m, // 기온
    humidity: data.current.relative_humidity_2m, // 습도
  };
}
