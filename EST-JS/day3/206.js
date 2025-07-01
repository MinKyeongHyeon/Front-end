// function
// sum(3, 4);
// console.log(evenCheck(3));

//선언적 함수, 함수선언식
function sum(a, b) {
  return a + b;
}
// sum(3, 4); 호이스팅으로 함수 활용 가능

//함수표현식
const evenCheck = function (number) {
  return number % 2 ? '홀수' : '짝수';
};

// console.log(evenCheck(3)); 호이스팅은 되지만 TDZ때문에 실행이 안됨.

const sum2 = (a, b) => {
  return a + b;
};

const getRandom2 = value => {
  return Math.floor(Math.random() * value);
};
console.log(getRandom2(3));
