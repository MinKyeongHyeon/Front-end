const num1 = '123';
const num2 = 123;
const num3 = 'hello';
// isNumber ? true or false
console.log(isNaN(num1)); //false -> 숫자이다.
console.log(isNaN(num2)); //flase -> 숫자이다.
console.log(isNaN(num3)); //true -> 숫자가 아니다.

console.log(Number.isNaN(num1));
console.log(Number.isNaN(num2));
console.log(Number.isNaN(num3));

//문제 1) apple이 들어있는지 확인
const str = 'I like apple pie.';
console.log(str.includes('apple'));

//문제 2) 4번째 인덱스에 있는 값 추출하기 charAt(3)
console.log(str.charAt(3));

//문제 3) 첫 번째 나오는 P의 인덱스값 추출하기
console.log(str.indexOf('p'));
//문제 4) 마지막 나오는 P의 인덱스값 추출하기
console.log(str.lastIndexOf('p'));
//문제 5) 공백을 기준으로 문자열 나눠서 배열로 변경하기
console.log(str.split(' '));
//문제 6) slice를 이용해서 , apple만 추출하기
console.log(str.slice(7, 12));
//문제 7) 문자열을 모두 대문자로 바꾸기
console.log(str.toUpperCase());
//문제 8) 문자열을 모두 소문자로 바꾸기
console.log(str.toLowerCase());
const str2 = '   Hello World   ';
//문제 9) 앞 뒤 공백 제거하기
console.log(str2.trim(), '-');
//문제 10) World를 찾아서 Ghost 로 바꾸기
console.log(str2.replace('Hello', 'Ghost'));
//문제 11) split을 이용해서 Hello 만 추출하고 3번 반복해서 출력하기
console.log(str2.split(' ')[3].repeat(3));
//문제 12) 모든 'o'알파벳을 찾아서 '-'로 변경하기
console.log(str2.replaceAll('o', '-'));
const num4 = '7';
//문제 13) 007로 표기하기
console.log(num4.padStart(3, '0'));
const a = 'hello';
const b = 'world';
//문제 14) 두 문자열을 붙여서 c에 저장후 출력하기
console.log(a.concat(b));
