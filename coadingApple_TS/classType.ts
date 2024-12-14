// class 생성 시 타입 지정하기
class People {
  data = 0; // 필드 값
  name: string; // 필드 값 선언해야 프로퍼티로 선언 가능(TS 문법)
  age: number;
  constructor(name: string, age: number) {
    // 파라미터도 타입 지정
    // object에 독립적으로 복사되는 프로퍼티 생성
    this.name = name;
    this.age = age;
  }
  함수(a: string) {
    // prototypr에도 타입 선언 가능
    console.log("안녕, " + a);
  }
}

let 사람1 = new People("kim", 18);
사람1.data; // 0
