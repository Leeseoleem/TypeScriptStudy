// [타입스크립트 기본 타입 정리]
// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
let my_name: string = "이서림";
let my_age: number = 25;
type Address = {
  contry: string;
  address: string;
};
let my_address: Address = {
  contry: "Republic of Korea",
  address: "Teheran-ro 113-gil, Gangnam-gu",
};

// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
type Song = {
  name: string;
  singer: string;
};
let favSong: Song = {
  name: "traceU",
  singer: "구본하",
};

// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
