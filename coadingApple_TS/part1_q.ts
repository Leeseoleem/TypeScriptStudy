// [타입스크립트 기본 타입 정리]
// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
let my_name: string = "이서림";
let my_age: number = 25;
type Address = {
  contry: string;
  address: string;
};
let my_address: Address = {
  contry: "Republic of Korea",
  address: "Teheran-ro 113-gil, Gangnam-gu",
};

// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
type Song = {
  name: string;
  singer: string;
};
let favSong: Song = {
  name: "traceU",
  singer: "구본하",
};

// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

// (숙제1) 다음 변수 4개에 타입을 지정해봅시다.
let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

// (숙제2) 학교라는 변수에 타입지정해보십시오.
let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

// (숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
function 반가워요(name?: string) {
  if (name) {
    console.log("안녕하세요");
  } else {
    console.log("이름이 없습니다");
  }
}

// (숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
function 자릿수세기(X: number | string): number {
  return X.toString().length;
}

// (숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
function 결혼가능여부(
  월소득: number,
  집보유여부: boolean,
  매력점수: string
): string | void {
  let total = 월소득 + (집보유여부 ? 500 : 0) + (매력점수 === "상" ? 100 : 0);
  if (total > 600) return "결혼가능";
}

// 숫자와 문자가 섞인 array를 입력하면 [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
function 클리닝함수(x: (number | string)[]): number[] {
  return x.map((x) => Number(x));
}

// (숙제2) 다음과 같은 함수를 만들어보십시오.
//  object 자료를 파라미터로 집어넣으면 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
function 과목추출(x: { subject: string | string[] }) {
  return typeof x.subject === "string" ? x.subject : x.subject[-1];
}

// (숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
type Same1 = number;
type Same2 = number;
type Same = Same1 & Same2;
// 단순히 하나의 타입이 된다

// (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다.
type Shape = {
  color?: string;
  size: number;
  readonly position: number[];
};

// (숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오.
// object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias
type Reporter = {
  name: string;
  phone: number;
  email: string;
};

// (숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.
const cutZero = (a: string): string => a.replace(/^0+/, "");

const removeDash = (a: string): number => parseInt(a.replace(/-/g, "")); // g: global -> 모든 매칭 결과 찾음

// (숙제3) 함수에 함수를 집어넣고 싶습니다.
type Type1 = (a: string) => string;
type Type2 = (a: string) => number;
function 첫쩨(a: string, b: Type1, c: Type2) {
  return c(b(a));
}
