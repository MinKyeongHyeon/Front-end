// if(조건식) truthy, falsy
/**
 * ' '공백이 있는 문자열 -> true
 * ''공백이 없는 문자열 -> false
 * null -> false
 * undefined -> false
 */
if (null) {
  console.log('true');
} else {
  console.log('false');
}

// 삼항연산자 -> 조건식 ? 참일때 : 거짓일때

null ? console.log('true') : console.log('false');

const number = 2;
const result = number % 2 === 0 ? 'even' : 'odd';
console.log(result);

// 90점 이상 합격 / 이하 불합격
const score = 90;
if (score >= 90) {
  console.log('합격');
} else {
  console.log('불합격');
}

// 90점 이상 'A' / 70점 이상 'B' / 70미만 '루저'
if (score >= 90) {
  console.log('A');
} else if (score >= 70) {
  console.log('B');
} else if (score >= 50) {
  console.log('C');
} else {
  console.log('looser~');
}
