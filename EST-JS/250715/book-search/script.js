const REST_API_KEY = 'db62959ae64b80a7a0e5e762caf7c728';
const BOOK_URL = 'https://dapi.kakao.com/v3/search/book';

// DOM 요소 선택
const $bookList = document.getElementById('book-list');
const $searchForm = document.getElementById('search-form');
const $searchInput = document.getElementById('search-input');

// TODO 1: 책 검색 함수 구현
async function searchBooks() {
  // 검색어 가져오기
  const input = $searchInput.value.trim();
  // 빈 검색어 확인
  if (!input) {
    alert('검색어를 입력해주세요!');
    return;
  }

  // API 호출
  try {
    // fetch를 사용해서 API 호출하기
    const response = await fetch(
      `${BOOK_URL}?query=${encodeURIComponent(input)}&size=10`,
      {
        headers: {
          Authorization: `KakaoAK ${REST_API_KEY}`,
        },
      }
    );
    // 응답 상태 확인하기
    if (!response.ok) {
      throw new Error('서버가 응답하지 않습니다. 새로고침해 주세용~');
    }
    // JSON 데이터로 변환하기
    const data = await response.json();
    // 결과가 없다면 '검색 결과가 없습니다.' 메시지 표시
    if (data.documents.length === 0) {
      $bookList.innerHTML = '검색 결과가 없습니다.';
      alert('검색 결과가 없는데용~ 6^_^;');
      return;
    }
    // 검색 결과를 화면에 표시하기
    renderBooks(data.documents);
  } catch (error) {
    // 에러 메시지 콘솔 및 화면에 표시하기
    alert(`에러가 발생했어용~ @_@ ${error.message}`);
  }
}

// TODO 2: 폼 제출 이벤트 처리
$searchForm.addEventListener('submit', e => {
  // 기본 동작 방지하기
  e.preventDefault();
  // 검색 함수 호출하기
  searchBooks();
});

// TODO 3: 책 목록 렌더링 함수
function renderBooks(book) {
  // 기존 내용 삭제
  $bookList.innerHTML = '';
  // 책 정보를 화면에 표시
  book.forEach(documents => {
    $bookList.innerHTML += `
    <li>
      <h3>${documents.title}</h3>
      <img src="${documents.thumbnail}" alt="">
      <p>${documents.authors.join(', ')}</p>
    </li>
    `;
  });
}

// 🔍 구현 힌트
/*
📚 API 요청 URL 만들기:
`${BOOK_URL}?query=${encodeURIComponent(query)}&size=10`

🔑 Authorization 헤더 설정:
{
  headers: {
    'Authorization': `KakaoAK ${REST_API_KEY}`
  }
}

📊 API 응답 데이터 구조:
{
  "documents": [
    {
      "title": "책 제목",
      "authors": ["저자1", "저자2"],
      "thumbnail": "이미지 URL",
      "publisher": "출판사",
      "price": 15000
    }
  ]
}
*/
