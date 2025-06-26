/**
 * 논리연산자(and, or, not)
 */

//and -> &&
console.log(true && true);
console.log(true && false);
console.log(false && false);

// or -> || -> 하나라도 값이 true 이면 , -> true 반환
console.log(true || true);
console.log(true || false);
console.log(false || false);

//not -> !
console.log(!true);
console.log(!false);
console.log(!!false);

/**
 * ko = 100, en = 80, math = 50
 * 평균이 70점 이상이면 합격, 단 한과목이라도 60점 미만이면 불합격
 */

const ko = 100;
const en = 80;
const math = 50;
const ave = (ko + en + math) / 3;
if (ave >= 70 && ko >= 60 && en >= 60 && math >= 60) {
  console.log('합격이에유~');
} else {
  console.log('불합격이에유~');
}
if (ave <= 70 || ko <= 60 || en <= 60 || math <= 60) {
  console.log('불합격이에유~');
} else {
  console.log('합격이에유~');
}
