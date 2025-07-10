// 어느 날, 당신은 "모여봐요 코딩의숲" 도서관의 사서가 되었습니다. 아래와 같이 `bookList`라는 문자열 형태의 책 목록이 있는데, 이걸 장르(`genre`)별로 깔끔하게 정리해서, 어떤 장르에 어떤 책들이 있는지 객체 형태로 만들어 달라는 요청을 받았습니다.

// ### **요구사항**

// 1. 주어진 `bookList` **문자열**을 자바스크립트 **배열**로 변환하세요.
// 2. 배열을 순회하면서, 각 책의 **장르(`genre`)** 를 `key`로 하는 새로운 **객체**를 만드세요.
// 3. 해당 `key`의 `value`는 그 장르에 속하는 책들의 **제목(`title`)** 이 담긴 **배열**이어야 합니다.
// 4. 최종적으로 완성된 객체를 `console.log`로 출력하세요.

const bookList =
  '[{"id":1,"title":"The Great Gatsby","author":"F. Scott Fitzgerald","year":1925,"genre":"Novel","available":true},{"id":2,"title":"To Kill a Mockingbird","author":"Harper Lee","year":1960,"genre":"Novel","available":false},{"id":3,"title":"1984","author":"George Orwell","year":1949,"genre":"Dystopian","available":true},{"id":4,"title":"Pride and Prejudice","author":"Jane Austen","year":1813,"genre":"Romance","available":true},{"id":5,"title":"The Catcher in the Rye","author":"J.D. Salinger","year":1951,"genre":"Novel","available":false}]';

// 1. 주어진 `bookList` **문자열**을 자바스크립트 **배열**로 변환하세요.
/**
 * 일단 파싱 ...
 */
const parsedBookList = JSON.parse(bookList);

// 2. 배열을 순회하면서, 각 책의 **장르(`genre`)** 를 `key`로 하는 새로운 **객체**를 만드세요.
/**
 * 새로 만들 객체 초기화
 */
const bookGenre = {};

// 3. 해당 `key`의 `value`는 그 장르에 속하는 책들의 **제목(`title`)** 이 담긴 **배열**이어야 합니다.
/**
 * 1. forEach로 장르를 새로 배열에 담아서
 * 2. 타이틀을 배열에 푸쉬.
 *
 */
parsedBookList.forEach(book => {
  const newGenre = book.genre;
  const newTitle = book.title;
  console.log('장르는: ', newGenre, '제목은: ', newTitle);
  // 장르를 배열에 넣고, 배열에 장르가 같으면 푸쉬?
  // 장르 [제목, 제목, 제목] <= 이게 원하는 정답 ?
  console.log('배열', bookGenre[newGenre]); //배열이 없으면 undefined
  if (bookGenre[newGenre] === undefined) {
    bookGenre[newGenre] = [];
  }
  // else {
  //   bookGenre[newGenre].push(newTitle);
  // } // else로 하니까 새 장르일때는 배열초기화만 하고 푸쉬를 안함

  bookGenre[newGenre].push(newTitle);
});

// 4. 최종적으로 완성된 객체를 `console.log`로 출력하세요
console.log(bookGenre);
