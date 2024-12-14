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
