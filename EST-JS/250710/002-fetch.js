// "https://dev.wenivops.co.kr/services/fastapi-crud/1/blog"
const blogList = document.querySelector('#blogList');

// 1. 렌더링
function renderingBlog(data) {
  const blog = data.map(item => {
    return `
    <li>
        <h2>${item.title}</h2>
        <strong>작성자: ${item.author}</strong>
        <time datetime=${item.date}>${item.date}</time>
        <p>조회수: ${item.views_count}</p>
      </li>
    `;
  });
  blogList.innerHTML = blog.join('');
}

// 2. 블로그 목록 조회
function fetchBlog() {
  fetch('https://dev.wenivops.co.kr/services/fastapi-crud/1/blog')
    .then(response => {
      if (!response.ok) {
        throw new Error('블로그 목록을 가져오지 못했습니다.');
      }
      return response.json();
    })
    .then(data => {
      renderingBlog(data);
    })
    .catch(error => {
      console.error('에러 발생:', error);
    });
}
fetchBlog();

/*
function getProducts() {
  fetch("https://dev.wenivops.co.kr/services/fastapi-crud/1/product")
    .then((response) => {
      // 응답 객체를 받음
      console.log(response);
      //JSON 파싱 => 원하는 형식에 맞게 실제 데이터를 꺼내기 위함.
      return response.json();
    })
    .then((json) => {
      // 파싱 결과를 사용
      console.log(json);
    })
    .catch((error) => {
      // 오류가 발생한 경우 처리
      console.error(error);
    });
}
// getProducts();
*/
