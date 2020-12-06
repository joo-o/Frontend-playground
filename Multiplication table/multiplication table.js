/// while문 + game over /// 

var 틀린횟수 = 0;
while (틀린횟수 < 3) {
  // 곱셈을 위한 변수 선언
  var x = Math.floor(Math.random() * 9) + 1;
  var y = Math.floor(Math.random() * 9) + 1;

  // 결과와 조건을 선언
  var 결과 = x * y, 조건 = true;
  while (조건) {
      var 답 = prompt(x + ' 곱하기 ' + y + '는?');
      if (결과 === Number(답)) {
          alert('정답');
          
          // 작은 while문을 나가기 위한 조건 수정
          조건 = false;

          // 틀린횟수를 0으로 초기화
          틀린횟수 = 0;
      } else {

          // 틀렸을 때 틀린횟수를 증가
          틀린횟수++;

          // 세번 이상 틀리면 게임 종료
          if (틀린횟수 >= 3) {
            alert('Game over');

            // 작은 while문을 나가기 위한 조건 수정
            조건 = false;
          } else {
            alert('땡');
          }
      }
  }
}



/// for문 + game over /// 


for (var 틀린횟수 = 0; 틀린횟수 < 3;) {
    var x = Math.floor(Math.random() * 9) + 1;
    var y = Math.floor(Math.random() * 9) + 1;

    var 결과 = x * y;
    for (var 조건 = true; 조건;) {
        var 답 = prompt(x + ' 곱하기 ' + y + '는?');
        if (결과 === Number(답)) {
            alert('정답');
            조건 = false;
            틀린횟수 = 0;
        } else {
            틀린횟수++;
            if (틀린횟수 >= 3) {
              alert('Game over');
              조건 = false;
            } else {
              alert('땡');
            }
        }
    }
}