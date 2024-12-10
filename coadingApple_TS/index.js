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
function 함수_숫자(x) {
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
var 김 = "kim"; // 김 = 123; => 에러 발생 - 설정한 타입만 담을 수 있게 실드
var 나이 = 18;
var 모쏠 = true;
// 그러나 모두 타입 지정이 필요한 건 아니다
var 회원명 = "하이요"; // 이렇게 지정 안해도 알아서 지정해준다
// 회원명 = 123; 이렇게 하면 오류난다
// 3. 타입 지정하기 애매할 때: union, any, unkown
// 1) union
var 여러가지 = 1;
var 어레dl = ["hi", 1]; // 괄호 안치면 의미 바뀜
var 오브젝트 = {
    a: 1,
    b: "2",
};
// 2) any(걍 기본 js랑 비슷한듯)
var all;
all = "사람";
all = "10";
// 3) unkown: any와 유사, 모든 자료형 허용 => any보다 안전
var 몰라;
몰라 = "1";
// any | unkown의 차이
var 암거나 = "10";
var 몰루 = "10";
var 답 = 10 - 암거나;
// let 답2: number = 10 - 몰루; => 에러 발생
// 4. 타입스크립트의 단점: 엄격함
var 내나이;
// 내나이 + 1; => 에러: boolean 타입일 수 있기 때문에
var 가 = 1;
// 가 + 1 => 에러: TS는 엄격하게 숫자 타입만 계산 허용
// 5. 함수에서 타입 지정하기
function 함수_예시(a) {
    return a * 2;
}
// 함수의 파라미터 : 변수 생성과 동일 => 타입 설정 가능
// void 타입: 아무것도 return 하지 않는 함수 타입
function 함수_예시2(a) {
    // return a * 2; => 에러 발생
}
// 함수의 파라미터에 타입을 지정한 경우 => 함수 선언 시 파라미터 작성 안하면 오류
// 해결방법? 파라미터 옆에 물음표 추가하자: 파라미터변수? : 타입
// ?는 undefined 타입과 동일
// 함수_예시2(); => 인수가 없다고 에러 발생
function 함수_예시3(x) { }
함수_예시3();
// 5. 타입 확정하기
// 1) Narrowing
function 양다리함수(x) {
    if (typeof x === "number")
        return x + 1;
}
// 2) assertion: 타입 덮어쓰기
function 문어함수(x) {
    return x + 1;
}
// => type을 변수처럼 분리해서 사용 가능: type alias(별칭)
// 시작은 대문자로
var animal; // string | number | undefined 타입 사용 가능
var 돼지 = {
    name: "cat",
    age: 15,
};
// const 변수는 변경 불가능
var 출생지역 = "서울";
var 내소개 = {
    region: "seoul",
};
내소개.region = "경기"; // const 내 object는 변경 가능
var 여친 = {
    name: "유라",
};
