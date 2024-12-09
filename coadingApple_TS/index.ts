// 타입 스트립트 시작하기
// 1. 타입 스크립트 문법
let hi: string = "서림"; // 변수에 타입 지정 가능
let nameList: string[] = ["본하", "우빈"]; // array 지정할 경우 배열 내 타입 지정 필요
let score: { name: string } = {
  name: "이름",
}; //  object의 경우 그 형태에 맞게 지정

// Uniontype: 한 변수에 다양한 타입이 들어올 수 있음
let 이름: string | number = "hi";
// 타입 변수 생성 가능 : Type alias
type NameType = string | number; // 보통 대문자로 작성
type Member = [number, boolean]; // tuple로 설정 가능
let john: Member = [123, true];

// 함수에도 타입 지정 가능
function 함수(x: number): number {
  return x * 2;
} // 파라미터 값: () 내부 | 출력 값: () 밖

// class 타입 지정 가능
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
} // 근데 난 React 주력이라 class는 잘,,,

// 2. object 심화
// 다양한 형태의 키 - 값을 선언하는 경우
// 1) key의 형태가 모두 동일한 경우
let scoreList: { [Key: string]: number } = {
  본하: 0,
  우빈: 10,
};
// type을 별도로 지정하여 불러올 수도 있음
type Score = {
  [key: string]: number;
};

let studentScore: Score = {
  본하: 0,
  우빈: 10,
};

// 2) 자료가 다양할 경우: 정해져 있음
type PersonType = {
  name: string;
  age: number;
  isStudent: boolean;
}; // 이와 같이 설정할 수 있음

let user1: PersonType = {
  name: "타입스트립트",
  age: 1,
  isStudent: true,
};

// 3) 키값 모두 자유로운 경우: Record
const intro_Me: Record<any, any> = {
  나: "이서림",
  나이: "소녀",
  실력: false,
};

// 2. 타입스크립트 기본 타입 정리(복?습)
let 성: string = "kim"; // 성 = 123; => 에러 발생 - 설정한 타입만 담을 수 있게 실드
let 나이: number = 18;
let 모쏠: boolean = true;

// 그러나 모두 타입 지정이 필요한 건 아니다
let 회원명 = "하이요"; // 이렇게 지정 안해도 알아서 지정해준다
// 회원명 = 123; 이렇게 하면 오류난다
