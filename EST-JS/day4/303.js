// reduce()
//(accumalator , currentValue)
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((a, c) => a + c, 0);

console.log(total);

const numbers2 = [10, 23, 15, 3, 2, 12, 30, 42, 50];
//홀수번째 인덱스 값만 더한 결과를 출력하시오.
const odd = numbers2
  .filter((number, index) => index % 2)
  .reduce((a, c) => a + c, 0);

console.log(odd);
//1부터 10까지 넣고싶을때
const arr = Array(10)
  .fill(0)
  .map((_, i) => i + 1);
console.log(arr);

function sumNumbers(number) {
  const arr = Array(number)
    .fill(0)
    .map((_, i) => i + 1)
    .reduce((a, c) => a + c, 0);
  return arr;
}

sumNumbers(100);
console.log(sumNumbers(100));
console.log(sumNumbers(50));
console.log(sumNumbers(100000000));
