// 함수의 rest 파라미터
function 함수(...a: (number | string)[]) {
  // ...: rest parameter - 여러 개의 파라미터가 들어올 수 있다는 의미
  // rest parameter는 그 값이 array 형태로 들어옴
}

// ... 에 대해 알아보기
// 1. 함수 파라미터 자리: rest parameter
// 2. array나 object: 괄호 제거
let 하나 = [1, 2, 3];
let 둘 = [4, 5];
let 최종 = [...하나, ...둘]; // let 최종 = [1, 2, 3, 4, 5]

// destructuring: array 내부의 자료를 변수로 분리하는 문법
let [변수1, 변수2] = ["안녕", false];
// 변수1 = "안녕" ...이런 식으로 변수 저장

// 함수 파라미터에 destructuring 사용하기
let 함수출력오브젝트 = {
  student: true,
  age: 18,
};

function 함수not(a, b) {
  console.log(a, b);
}
function 함수yes({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
} // 파라미터 자체를 destructuring화
// 파라미터: 함수용 변수 - 동일하게 사용 가능

함수not(함수출력오브젝트.student, 함수출력오브젝트.age);
함수yes(함수출력오브젝트);
