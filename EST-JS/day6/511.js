// 함수선언식 : sum

function sum(a, b) {
  return a + b;
}

console.log(sum(3, 5)); // 결과가 리턴

//함수표현식
const sayHello = function (a) {
  return 'Hello ' + a;
};
console.log(sayHello('Ghost')); // Hello Ghost 가 출력

//함수표현식
const getBigNumber = a => Math.max(...a);
console.log(getBigNumber([3, 5, 10, 12])); //가장 큰 수를 리턴하는 함수

// 총점, 평균, 최고점수

function calcScores(a) {
  const total = a.reduce((a, b) => a + b, 0);
  const ave = total / a.length;
  const top = Math.max(...a);

  return [total, ave, top];
}

const [total, ave, top] = calcScores([100, 50, 25, 32, 70]);
console.log(`점수의 합계는 ${total}, 평균은 ${ave}, 1등점수는 ${top}`);
