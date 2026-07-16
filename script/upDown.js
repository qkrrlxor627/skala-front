function startUpDownGame() {
    
    const computerNum = Math.floor(Math.random() * 50) + 1;

    let count = 0;

    while(true) {
        const input = prompt(
            "1부터 50 사이의 숫자 중 컴퓨터가 생각한 숫자는 무엇일까요?"
        );
            
        if (input == null) {
            alert("게임을 종료합니다.");
            break;
        }

        const userNum = Number(input);

        if(Number.isNaN(userNum)) {
            alert("숫자를 입력해주세요.");
            continue;
        }

        if(userNum < 1 || userNum > 50) {
            alert("1부터 50 사이의 숫자를 입력해주세요.");
            continue;
        }

        count++;

        if(userNum > computerNum) {
            alert("Down");
        } else if(userNum < computerNum) {
            alert("Up");
        } else {
            alert(`축하합니다! ${count}번 만에 맞추셨습니다.`);
            break;
        }
    }
}