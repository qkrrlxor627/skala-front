function calculateGrade() {
    const subjects = ["HTML", "CSS", "JavaScript"];

    let total = 0;

    for(let i = 0; i < subjects.length; i++) {
        const input = prompt(subjects[i] + "점수를 입력하세요.");

        if(input === null) {
            alert("성적 계산을 취소했습니다.");
            return;
        }

        const score = Number(input);

        if(Number.isNaN(score) || score < 0 || score > 100) {
            alert("0부터 100 사이의 숫자를 입력해주세요.");
            i--; // i를 이전으로 초기화하기 위함.
            continue;
        }
        total += score;
    }

    const average = total / subjects.length;

    let result;

    if(average >= 60) {
        result = "합격";
    } else {
        result = "불합격";
    }

     
    alert(
        `총점: ${total}점\n평균: ${average.toFixed(1)}점\n결과: ${result}입니다`
    );
}
