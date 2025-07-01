//filter로 짝수만 추출
const arr = [1, 2, 3, 4, 5, 6];
const even = arr.filter(num => !(num % 2));
console.log(even);

// 2. map으로 각 요소 제곱 만들기
const arr2 = [1, 2, 3, 4];
const square = arr2.map(num => num ** 2);
console.log(square);

// 3. sort로 내림차순 정렬
const arr3 = [5, 2, 9, 1];
const sort = arr3.sort((a, b) => b - a);
console.log(sort);

// 4. reduce로 모든 값의 합 구하기
const arr4 = [1, 2, 3, 4];
const totalSum = arr4.reduce((a, c) => a + c, 0);
console.log(totalSum);

// 5. some으로 0보다 작은 값이 있는지 확인
const arr5 = [1, -2, 3, 4];
const hasNagative = arr5.some(num => num < 0);
console.log(hasNagative);

// 6. every로 모두 3 보다 큰지 확인
const arr6 = [4, 5, 6];
const greater3 = arr6.every(num => num > 3);
console.log(greater3);

// 7. forEach로 요소 출력
// Ghost는 친구들의 이름을 한 줄씩 출력하고 싶습니다. names 배열의 모든 요소를 한 줄씩 출력하는 solution함수를 완성하세요.

function solution(names) {
  return names.forEach(name => console.log(name));
}
solution(['Irangi', 'Camel', 'Shoopa']);

// 8. filter와 map조합
// Ghost는 60점 이상인 점수만 2배로 만들어 새로운 배열을 만들고 싶습니다. scores 배열에서 60이상인 값만 2배로 만들어 반환하는 solution 함수를 완성하세요.
function solution2(scores) {
  return scores.filter(scores => scores >= 60).map(scores => scores * 2);
}
console.log(solution2([50, 60, 70, 80]));

// 9. filter로 모음 제거
// 영어에서는 a, e, i, o, u가 모음으로 분류합니다.  문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하는 solution 함수를 완성하세요.
const solution3 = my_string =>
  my_string
    .split('')
    .filter(a => !['a', 'e', 'i', 'o', 'u'].includes(a))
    .join('');
console.log(solution3('beautiful'));

// 10. for문을 사용해 1부터 5까지 출력하세요.
for (let i = 1; i < 6; i++) {
  console.log(i);
}

// 11. for문으로 1~10 중 3의 배수만 배열에 담아 출력하세요.
let numbers = [];
for (let i = 1; i < 11; i++) {
  if (i % 3 === 0) {
    numbers.push(i);
  }
}
console.log(numbers);
