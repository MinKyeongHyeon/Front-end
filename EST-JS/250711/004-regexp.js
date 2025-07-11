//리터럴 방식
const reg1 = /abc/g; // abc라는 문자열을 전열에서 찾는 정규표현식
console.log(reg1.test('abc abc abc')); // true
console.log(reg1.test('abb abb abb')); // false

// 생성자 방식
const reg2 = new RegExp('abc', 'g');
console.log('abc Abc ABC abc'.match(reg2));

const reg3 = new RegExp('abc', 'gi'); // 대소문자 구분하지 않음
console.log('abc Abc ABC abc'.match(reg3));

// 플래그 => 혼합해서 사용할 수 있다.
// g(global) : 전체 문자열에서 검색
// i(ignore case) : 대소문자 구분하지 않음
// m(multiline) : 여러 줄에서 검색 => 각 줄이 개별적으로 인식됨.

const text = `abc
Abc
ABC
abc`;

const reg4 = /^abc/gim; // ^ : 문자열의 시작
console.log('^과 m을 사용한 결과', text.match(reg4));

// 메서드
// test() : 문자열이 정규표현식과 일치하는지 확인 (값이 참이면 그 자리를 기억하고 다음부터 이어서 검색하니 주의!)
let pattern = /abc/g;
console.log(pattern.test('ABC')); // false
console.log(pattern.test('abc')); // true

// exec() : 일치하는 문자열을 찾고, 일치하는 부분을 배열로 반환
pattern = /hello/g; // g => 매칭이 성공하면 성공한 자리를 기억했다가 다음부터 이어서 검색함
console.log(pattern.exec('hello world')); // index 0
console.log(pattern.exec('hello world hello weniv')); // index 12

// match() : 문자열에서 정규표현식과 일치하는 모든 결과를 배열로 반환
const text2 = 'abc ABC Abc ABC';
console.log(text2.match(/abc/gi));
console.log(text2.match(/hello/gi)); // 일치하는 값이 없으면 null 반환

// search() : 문자열에서 정규표현식과 일치하는 첫 번째 위치를 반환
console.log(text2.search(/ABC/));
console.log(text2.search(/xyz/)); // 일치하는 값이 없으면 -1 반환

// replace() : 문자열에서 정규표현식과 일치하는 부분을 다른 문자열로 대체
console.log('Hello World Hello Weniv'.replace(/World/g, '👍🏻'));

// 패턴 : 찾고자 하는 문자열 규칙
// 1. 기본 문자
const text3 = 'abc ABC 가나다 1234 !@#';

// 소문자: [a-z]
console.log(text3.match(/[a-z]/g));
console.log(text3.match(/a-z/g)); // 'a-z' => null

// 대문자: [A-Z]
console.log(text3.match(/[A-Z]/g));

// 한글: [가-힣], 한글 음절 범위
console.log(text3.match(/[가-힣]/g));

// 숫자: [0-9]
console.log(text3.match(/[0-9]/g));

// 이스케이프 패턴 => 대문자로 나타내면 반대의 의미를 가집니다.
let testText = `abc ABC 가나다
1234 !@#_`;

console.log('모든 문자(.)', testText.match(/./g));

console.log('숫자(\\d)', testText.match(/\d/g));
console.log('숫자가 아닌 모든 문자(\\D)', testText.match(/\D/g));

console.log('단어문자(\\w)', testText.match(/\w/g)); // 영문자, 숫자, 밑줄(_)
console.log('단어문자가 아닌 모든 문자(\\W)', testText.match(/\W/g));

console.log('공백문자(\\s)', testText.match(/\s/g)); // 스페이스, 탭, 줄바꿈
console.log('공백문자가 아닌 모든 문자(\\S)', testText.match(/\S/g));

console.log('단어 경계(\\b\\w)', testText.match(/\b\w/g)); // 단어-비단어 경계
console.log('단어 경계에 있지 않은 모든 문자(\\B\\w)', testText.match(/\B\w/g));

// 위치 문자
let exampleText2 = 'Example \nexample';

// 문자열의 시작 (^)
console.log(exampleText2.match(/^E/g));
console.log(exampleText2.match(/^e/g)); // e는 줄바꿈이 일어나서 값은 null
console.log(exampleText2.match(/^e/gm)); // m 플래그를 사용하면 각 줄의 시작을 찾을 수 있다.

// 문자열의 끝($)
console.log(exampleText2.match(/e$/)); //
console.log(exampleText2.match(/e$/m)); //
console.log(exampleText2.match(/e$/gm)); //

// [^ $] : 문자를 특정해서 패턴을 만들고 싶을때

// 수량 패턴
let repeatText = 'abc aabbcc aaabbbccc aaaabbbbcccc';
// ?: 앞의 문자열이 0개이거나 1개인 경우
console.log(repeatText.match(/a?b/g));
// + : 앞의 문자열이 1개 이상인 경우
console.log(repeatText.match(/a+b/g));
// * : 앞의 문자열이 0개 이상인 경우
console.log(repeatText.match(/a*b/g));

// a{2} => aa
// a{2,} => aa, aaa, aaaa  2개 이상인 경우
// a{2,4} => aa, aaa, aaaa 2개 이상 4개 이하인 경우

// OR 연산 (|)
console.log(repeatText.match(/a{2}|b{2}/g));
// a가 2개이거나 b가 2개인 경우를 찾음

// () 서브패턴
let message = 'I love cat and dog';

console.log(message.match(/(cat|dog)/g)); // 문자열 조각 => ['cat', 'dog']
console.log(message.match(/[cat|dog]/g)); // 문자 조각 => ['c', 'a', 't', 'd', 'o', 'g']

// 활용
// 1. 해시태그 추출하기
let post = '#개발 강의는 역시 #위니브! #오르미 6기 #최고 #개발자 #프론트엔드';
let hashtagPattern = /#[가-힣\w]+/g;
let hashtags = post.match(hashtagPattern);
console.log(hashtags);

let clearHashtags = hashtags.map(tag => tag.replace('#', ''));
console.log(clearHashtags);
// 태그 : 영문자, 숫자, 한글, 밑줄 => 한글 + 단어 => [가-힣\w]

// 2. 여러 개의 공백을 하나로 줄이기
let spaceText = '         hello        world      Hello      weniv         ';
let spacePattern = /\s+/g; // 1개 이상인 공백을 검색하는 정규표현식
console.log(spaceText.match(spacePattern)); // 연속된 1개 이상의 공백을 하나의 공백으로 치환
console.log(spaceText.replace(spacePattern, ' ').trim()); //앞, 뒤 공백 제거

// 3. 전화번호 포맷 검증
// 010-1234-5678 => /^\d{2,3}-\d{3,4}-\d{4}$/

const numberPattern = /^\d{2,3}-\d{3,4}-\d{4}$/;
console.log(numberPattern.test('010-1234-5678'));
console.log(numberPattern.test('02-1234-5678'));
console.log(numberPattern.test('070-1234-52678'));
console.log(numberPattern.test('1070-1234-52678'));

// 4. 이메일 형식
// 아이디@url.com
// 아이디: 영문자, 숫자, 밑줄, 6자 이상
// 도메인 이름: 영문자, 숫자, 하이픈, 3자 이상
// 점 \.
// /^[a-zA-Z0-9_]{6,}@([a-zA-z0-9-]{2,}\.)+[a-z]{2,4}$/
const emailPattern = /^[a-zA-Z0-9_]{6,}@([a-zA-z0-9-]{2,}\.)+[a-z]{2,4}$/;
console.log(emailPattern.test('test123@weniv.com'));
console.log(emailPattern.test('test123@weniv.co.kr'));
console.log(emailPattern.test('tes#t123@weniv.co.kr'));
console.log(emailPattern.test('test123@w-eniv.co.kr'));
