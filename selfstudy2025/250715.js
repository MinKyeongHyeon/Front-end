// 다음 HTML 태그에서 특정 속성값을 추출하는 정규식을 작성하세요.
// data-* 속성의 값만 추출하되, 따옴표 안의 내용을 캡처해야 합니다.
const html = `
<div class="container" data-id="12345" data-name="홍길동">
    <span data-role="admin" id="user1">사용자1</span>
    <p data-msg="안녕하세요!" data-count="100">내용</p>
</div>
`;
// 예상 결과: ['12345', '홍길동', 'admin', '안녕하세요!', '100']

