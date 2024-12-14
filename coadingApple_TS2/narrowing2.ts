// typeof 연산자로 부족할 경우
// 1. && 키워드
function 함수(a?: string) {
  if (a && typeof a === "string") {
    // &&를 통해 falsy값을 찾아즘
    // falsy 값: false와 유사한 기능을 하는 null, undefined, NaN 등
    console.log(a);
  }
}

// 2. in 키워드(각 타입 별 속성명이 다를 경우)
type Fish = {
  swim: string;
};
type Bird = {
  fly: string;
};
function 뭔동물(animal: Fish | Bird) {
  // animal이 어떤 object일지 모르기 때문에 요소 사용 불가
  // narrowing 필요: typef- number, string 등의 타입을 알려줌
  if ("swim" in animal) {
    console.log("회");
  }
}

// 3. istanceof
// 사용법: 오브젝트 istanceof 부모 class
let 날짜 = new Date();
if (날짜 instanceof Date) {
  console.log(날짜);
}

// 4. 유사한 object를 type를 갖는 경우
type Car = {
  wheel: "4개"; // 강제로 literal type 만들어 추후 구분, 혹은 고정 타입 만들기
  color: string;
};
type Bike = {
  wheel: "2게";
  color: string;
};

function 뭔차냐(x: Car | Bike) {
  if (x.wheel === "4개") {
    console.log("차 부럽다");
  }
}
