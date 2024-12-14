// type 키워드 이외에 interface 키워드로도 타입 변수 생성 가능
interface Square {
  color: string;
  width: number;
  height: number;
} // 등호 생략(class문법과 유사)

let 네모: Square = {
  color: "red",
  width: 100,
  height: 100,
};

// < interface 장점 >
interface Student {
  name: string;
}

interface Teacher extends Student {
  //name: string; -> extends  키워드를 통해 동일한 내용 복사
  age: number;
}

let 학생: Student = {
  name: "kim",
};

let 선생: Teacher = {
  name: "park",
  age: 35,
};
// 장점 1. extends로 복사 가능
// 물론 type에도 유사한 기능 존재
type Animals = {
  name: string;
};
type Cat = {
  age: number;
} & Animals; // & 기호 - interface도 사용 기능

// 장점 2. 중복 선언 가능
interface Student {
  //score: number;
} // 기존에 선언한 속성과 이어짐(자동 extends) - 대신 중복 속성 시 오류
// & 기호: 중복 속성의 경우 오류 X => 그러나 타입이 다를 경우 사용 시 오류(Never Type)
