// 1. ts로  HTML 조작하기
var 제목 = document.querySelector("#title"); // CSS 관련 요소 조작
var 소제목 = document.querySelector("#subTitle");
// 제목?.innerHTML = "반갑습니다"; => 에러: 보통 HTML의 요소 => null type을 기본으로 가짐
// 방법 1. as로 타입 확정시키기
var 메인 = document.querySelector("#main"); // 물론 as는 권장하지 않는다
// 방법 2. Narrowing으로 타입 확정
if (제목 != null) {
    제목.innerHTML = "반갑습니다";
} // 기본적인 방식
if (소제목 instanceof Element) {
    소제목.innerHTML = "타입 스크립트 학습 중입니다.";
} // Element 타입인 경우
var 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
    링크.href = "https://kakao.com";
} // a 태그의 경우 Element 만으론 식별 불가능 => 상세한 타입 입력 필요
// 모든 요소를 한 번에 변경: querySelectorAll()
var 젤다 = document.querySelectorAll(".naver");
젤다.forEach(function (a) {
    // 모든 요소를 돌아야 하므로 반복문 사용
    a instanceof HTMLAnchorElement && (a.href = "https://naver.com");
});
// 2. 이벤트 리스너 부착하기
// TS에선 이벤트 리스너 조작시에도 검증이 필요
var 버튼조작 = document.querySelector("#button");
var 이미지변환 = document.querySelector("#image");
버튼조작 === null || 버튼조작 === void 0 ? void 0 : 버튼조작.addEventListener("click", function () {
    이미지변환 instanceof HTMLImageElement &&
        (이미지변환.src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ8u9J0QCU4yykRNduILQmlwN1H2VCVNeifQ&s");
}); // 근데 나는 React 써서...
