// 타입 스크립트: JS에 없는 문법도 사용 가능- public, private, static, protected(객체 지향 키워드)
// class 사용 시 유용
class User {
  // constructor로 생성 시 필드에 변수 정의 필요
  public name = "seorim"; // public: 모든 자식들이 사용 가능
  private familyName = "kim"; // private: class 내부에서만 수정 가능(class 내에서만 사용하고 싶은 변수)

  constructor(name) {
    // constructor 사용 이유? - 파라미터 사용이 가능하기 때문
    // 기본적으로 필드에만 선언한 것과 유사하게 작동
    this.name = name;
  }
  public 함수() {
    // 프로토타입 함수도 생성 가능
  }
  이름변경함수() {
    // private 변수 변경 방법: class 내부에 변경 함수를 생성 후 밖에서 가져다 사용
    this.familyName = "park";
  }
}

let 유저1 = new User("park");
유저1.name = "yan"; // public 속성을 자유자제로 사용 가능...하나 원래도 됐었다(큰 의미는 없는 키워드)
// 기본적으로 선언한 변수는 public 키워드가 생략되어 있음

class Person {
  constructor(public name) {
    // 해당 파라미터는 자식의 name 속성에 기입해주세요
  }
}

new Person();
