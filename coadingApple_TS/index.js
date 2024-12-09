// 타입 스트립트 시작하기
// 1. 타입 스크립트 문법
var hi = "서림"; // 변수에 타입 지정 가능
var nameList = ["본하", "우빈"]; // array 지정할 경우 배열 내 타입 지정 필요
var score = {
    name: "이름",
}; //  object의 경우 그 형태에 맞게 지정
// Uniontype: 한 변수에 다양한 타입이 들어올 수 있음
var 이름 = "hi";
var john = [123, true];
// 함수에도 타입 지정 가능
function 함수(x) {
    return x * 2;
} // 파라미터 값: () 내부 | 출력 값: () 밖
// class 타입 지정 가능
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}()); // 근데 난 React 주력이라 class는 잘,,,
// 2. object 심화
// 다양한 형태의 키 - 값을 선언하는 경우
// 1) key의 형태가 모두 동일한 경우
var scoreList = {
    본하: 0,
    우빈: 10,
};
var studentScore = {
    본하: 0,
    우빈: 10,
};
var user1 = {
    name: "타입스트립트",
    age: 1,
    isStudent: true,
};
// 3) 키값 모두 자유로운 경우: Record
var intro_Me = {
    나: "이서림",
    나이: "소녀",
    실력: false,
};
// 2. 타입스크립트 기본 타입 정리(복?습)
var 성 = "kim"; // 성 = 123; => 에러 발생 - 설정한 타입만 담을 수 있게 실드
var 나이 = 18;
var 모쏠 = true;
// 그러나 모두 타입 지정이 필요한 건 아니다
var 회원명 = "하이요"; // 이렇게 지정 안해도 알아서 지정해준다
// 회원명 = 123; 이렇게 하면 오류난다
