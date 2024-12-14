// 함수에 사용하는 never type
// 조건 1. return 값이 없어야힘
// 조건 2. 함수 실행이 끝나지 않아야 함(endpoint가 없어야 함)
// => 함수: 기본적으로 return undefined를 가지고 있음
function 네버함수(): never {
  // 방법 1. 강제 에러 실행
  throw new Error(); // 함수 실행 중단
  while (true) {
    // 방법 2. 무한히 도는 함수 만들기...
  }
}
// never 타입: 보통 쓸 일 없디(void 선에서 컷)
// => 근데 내가 잘못 짠 코드에 알아서 never가 붙음ㅋㅋ
// 언제? narrowing을 이상하게 할 때, 에러를 강제로 발생시킨 함수일 때
