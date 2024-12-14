// class 생성 시 타입 지정하기
var People = /** @class */ (function () {
    function People(name, age) {
        this.data = 0; // 필드 값
        // 파라미터도 타입 지정
        // object에 독립적으로 복사되는 프로퍼티 생성
        this.name = name;
        this.age = age;
    }
    People.prototype.함수 = function (a) {
        // prototypr에도 타입 선언 가능
        console.log("안녕, " + a);
    };
    return People;
}());
var 사람1 = new People("kim", 18);
사람1.data; // 0
