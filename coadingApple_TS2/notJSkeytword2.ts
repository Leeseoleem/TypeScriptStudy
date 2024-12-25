class User2 {
  private x = 10;
  protected y = 20; // private와 유사- 확장성 존재
}

// class 복사한 class 생성
class NewUser extends User2 {
  // User2에 있는 내용이 NewUser에 복사됨
  // x = 24; -> 사용 불가능: private는 선언한 class에서만 변경 가능
  y = 24; // protected는 extensd 한 class에서도 사용 가능: class를 여러 개 만드는 경우가 아닌 이상 의미는...
}

class Dot {
  x = 10;
  y = 10;
  static z = 24; // static: 부모 class에 직접 부여(자식은 사용 불가능)
  private static k = "hi"; // static 키워드는 다른 키워드와 동시 사용 가능
}

let 자식 = new Dot();

class Gamer {
  skill = "js";
  intro = this.skill + "반갑습니다";
}

let 철수 = new Gamer();
