// Literal Type: 엄격한 타입 지정, 자동완성 기능
let 성: "Kim" | "Lee" | "park";
// 성 = "Yoon" => 에러
function 함수L(a: "hello"): void {
  console.log("hi");
} // 함수에서 특정값만 입력받는 경우 유용

// const 변수의 한계 -> 확장성의 부족 : Literal type으로 보완
var 자료 = {
  name: "kim",
} as const;
// as const?
// object 타입에서 value값이 타입이 됨
// 모든 key 값에 readonly 붙여줌
function 자료함수(a: "kim") {} // a 파라미터에 "kim" 타입만 들어올 수 있음
// 자료함수(자료.name) => 에러 발생: "kim" 타입이 아닌 string 타입이기 때문
자료함수(자료.name);
