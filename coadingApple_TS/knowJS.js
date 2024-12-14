// class 문법 알아보기
class Hero {
  constructor(q, w) {
    this.q = q;
    this.w = w;
  }
} // Hero 타입의 class 생성: 부모 class
// this: Hero로부터 생성되는 object

var 누누 = new Hero("consume", "snowball"); // 상속 -> 자식
var 가렌 = new Hero("strike", "courage");

// prototype: 유전자?
// class로 생성된 object 틀의 경우 prototype이 자동 생성
Hero.prototype.name = "hero"; // prototype을 통해 유전자 추가 - 자식에 직접 추가되는 것은 아니고 빌려쓰기만,,,

var 어레이 = [1, 2, 3];
var 어레이 = new Array(1, 2, 3); // 두 방식은 모두 동일
// => 부모 유전자에 다양한 함수가 저장되어 있기 때문에 다양한 함수를 가져다 쓸 수 있음
// => array.prototype 으로 뽑아서 확인 가능
