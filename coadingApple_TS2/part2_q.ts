// (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
function 최댓값(...a: number[]) {
  let b = a.sort((a, b) => b - a);
  return b[0];
}

function 최댓값2(...a: number[]): number {
  let result = 0;
  a.forEach((a) => {
    if (a > result) {
      result = a;
    }
  });
  return result;
}

// (숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
function 요상한입력({
  user,
  comment,
  admin,
}: {
  user: string;
  comment: number[];
  admin: boolean;
}): void {
  console.log(user, comment, admin);
}

// (숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
function 어레이받아함수([a, b, c]: [a: number, b: string, c: boolean]): void {
  console.log(a, b, c);
}
어레이받아함수([40, "와인", false]);

// 숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
class User1 {
  private static x = 10; // User1에 속하며(자식 물려주기 X) User1 class에서만 수정 가능한 변수
  public static y = 20; // User1에 속하며 자유롭게 수정 가능한 변수
  protected z = 30;
}

let 한숨 = new User1();
// User1.x = 20; 은 불가능
// User1.y = 10; 은 가능

// (숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.

class UserPlus {
  private static x = 10;
  public static y = 20;
  static addOne(a: number): number {
    return UserPlus.x + a;
  }
  static printX() {
    console.log(UserPlus.x);
  }
}
UserPlus.addOne(3); //이렇게 하면 x가 3 더해져야함
UserPlus.addOne(4); //이렇게 하면 x가 4 더해져야함
UserPlus.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함

class Square {
  x: number;
  y: number;
  color: string;
  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
}
