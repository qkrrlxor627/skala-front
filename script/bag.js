const myBag = [
  { name: "이것이 자바다", count: 1 },
  { name: "모던 자바스크립트", count: 1 },
  { name: "토비의 스프링", count: 1 },
  { name: "헤드헌터 디자인패턴", count: 1 },
  { name: "맥북", count: 10 },
  { name: "아이패드", count: 5 },
  { name: "수학의 정석", count: 4 },
];

function createBagMessage(items) {
  let itemList = ""; // let sum = 0처럼 자료형 차이로 에러안나기 위함.
  for (const item of items) {
    itemList += `- ${item.name}: ${item.count}개\n`;
  }

  return `🎒 내 가방 속 물품 목록

${itemList}
총 물품 종류: ${items.length}개`;
}

function ShowMyBag() {
  alert(createBagMessage(myBag));
}
