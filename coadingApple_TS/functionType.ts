type 함수타입 = (a: string) => number; // 함수 타입: 화살표 함수로 가능

// 함수 타입 사용 시 => 함수 표현식으로 선언
let 함수F: 함수타입 = function (a) {
  return 10;
};

type One = (a: number) => number;

// object 내부에 함수 선언 가능
let 회원정보 = {
  name: "Lee",
  plusOne: function (a) {
    return a + 1;
  } as One, // 회원정보.plusOne() 시 함수 사용 가능
  changeName: () => {},
};

// 콜백 함수

function 함수one(a) {
  a();
}

function 함수two() {}

함수one(함수two); // => 이렇게 사용할 수 있음(react엔 진찌 callback() 가 있으니...)
