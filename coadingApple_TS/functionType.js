// 함수 타입 사용 시 => 함수 표현식으로 선언
var 함수F = function (a) {
    return 10;
};
// object 내부에 함수 선언 가능
var 회원정보 = {
    name: "Lee",
    plusOne: function (a) {
        return a + 1;
    }, // 회원정보.plusOne() 시 함수 사용 가능
    changeName: function () { },
};
// 콜백 함수
function 함수one(a) {
    a();
}
function 함수two() { }
함수one(함수two); // => 이렇게 사용할 수 있음(react엔 진찌 callback() 가 있으니...)
