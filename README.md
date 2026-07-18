# 🌸 skala-front — 박기택의 스칼라 행보

> 매화처럼 추위를 이겨내며 정진하는 개발자의 개인 웹사이트.

전 페이지가 시맨틱 태그와 하나의 공통 스타일시트로 작성되었으며,
실시간 날씨 API, 브라우저 게임(업다운·성적 계산기·내 가방), 여행 앨범(오디오·비디오)까지
바닐라 자바스크립트로 구현했습니다.

---

## ✨ 주요 기능

- 🏠 **홈**
- 🌤 **실시간 세계 날씨**
- 🎮 **브라우저 게임 3종**
- 📅 **강의 시간표**
- 👤 **회원가입 폼**

---

## 📄 페이지 구성

| 페이지    | 파일                     | 설명                                                              |
| --------- | ------------------------ | ----------------------------------------------------------------- |
| 홈        | `html/index.html`        | 환영 배너 · 바로가기 · **소식/베스트컷** · **실시간 날씨/놀이터** |
| 수업      | `html/myClass.html`      | 주간 강의 시간표                                                  |
| 여행지    | `html/myTrip.html`       | 여행 사진 카드 · 배경음악 · 브이로그 영상                         |
| 휴일      | `html/myHoliday.html`    | 하루 일과 타임라인                                                |
| 프로필    | `html/myProfile.html`    | 자기소개                                                          |
| 회원가입  | `html/signUp.html`       | 폼 입력                                                           |
| 가입 결과 | `html/signUpResult.html` | 가입 완료 안내 및 페이지 이동 링크                                |

---

## 📁 폴더 구조

```
skala-front/
├── README.md
├── css/
│   └── style.css          # 전 페이지 공통 스타일 (테마 토큰 · 반응형)
├── html/
│   ├── index.html         # 홈
│   ├── myClass.html       # 강의 시간표
│   ├── myTrip.html        # 여행 앨범
│   ├── myHoliday.html     # 휴일 일과
│   ├── myProfile.html     # 프로필
│   ├── signUp.html        # 회원가입 폼
│   └── signUpResult.html  # 가입 결과
├── media/                 # 이미지 · 오디오 · 영상 자원
│   ├── gunsan.jpg · iksan.jpg · seoul.jpg · 리장.jpg · 세부.jpg · 홋카이도.jpg
│   ├── maehwa.svg         # 매화 아이콘
│   ├── music.mp3 · video.mp4
└── script/
    ├── upDown.js          # 업다운 숫자 맞추기 게임
    ├── grade.js           # 성적 계산기
    ├── bag.js             # 내 가방 물품 목록
    ├── bgm.js             # 여행 앨범 배경음악 자동재생
    ├── weatherAPI.js      # 날씨 API 호출  (ES Module · export)
    └── realtimeInfo.js    # 날씨 화면 렌더 (ES Module · import)
```

---

## 🧩 스크립트 상세

| 파일              | 진입점                 | 하는 일                                   |
| ----------------- | ---------------------- | ----------------------------------------- |
| `upDown.js`       | `startUpDownGame()`    | 1~50 임의의 수를 맞추는 업다운 게임       |
| `grade.js`        | `calculateGrade()`     | 점수를 입력하여 총점, 평균, 합격여부 계산 |
| `bag.js`          | `ShowMyBag()`          | 가방 속 물품 목록과 종류 개수를 표시      |
| `bgm.js`          | (자동 실행)            | 여행 앨범 배경음악                        |
| `weatherAPI.js`   | `getWeather(lat, lon)` | Open-Meteo API에서 기온·습도만 골라 반환  |
| `realtimeInfo.js` | (자동 실행)            | 도시 드롭다운 구성 · 선택 시 날씨 렌더    |

---

## 🛠 기술 스택

- **HTML5**
- **CSS3**
- **JavaScript (ES2015+)** — `async/await`, `fetch`, ES Module(`import`/`export`), DOM API
- **외부 API** — [Open-Meteo](https://open-meteo.com/) 실시간 날씨

---

## 📌 크레딧

- 저장소: <https://github.com/qkrrlxor627/skala-front>
- © 2026 박기택 · 웹 표준 시맨틱 태그로 작성되었습니다.
