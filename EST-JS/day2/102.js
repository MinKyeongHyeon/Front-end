/**
 * 비교 연산자
 */

let a = 3;
let b = 5;
console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);
console.log(a == b);
console.log(a != b); //부정연산자 (반대로)

let c = '5';
console.log(b == c); //값만 비교
console.log(b === c); // 데이터 타입까지 비교
console.log(b !== c); // 데이터 타입까지 비교

console.clear();

// 만약에 입력한 값이 3 이라면, '로또당첨', 아니라면 '꽝'
let userNumber = 7;
if (userNumber === 7) {
  // 참이면 실행
  console.log('로또당첨!');
} else {
  //거짓이면 실행
  console.log('꽝!!!!');
}

// 만약에 number가 짝수라면, '짝수', 홀수라면 '홀수'를 출력하고 싶다.
// 조건식(true or false)  number % 2 === 0 짝수,
let number = 5;
// const isEven = number % 2 === 0;
const isEven = number % 2;

if (!isEven) {
  console.log('짝수');
} else {
  console.log('홀수');
}
