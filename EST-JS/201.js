//review 01 num -> -13 이 숫자가 10 이상인지를 판별해서 '10이상이다','10이하이다' 출력(조건, 절대값으로)
const num1 = -13;
let result = Math.abs(num1) >= 10 ? '10이상이다' : '10이하이다.';
console.log(result);

//Review 02) 숫자를 반올림해서 짝수/ 홀수 구분하여 찍기

const num2 = 4.6;
result = Math.round(num2) % 2 === 0 ? '짝수' : '홀수';
console.log(result);

//Review 03) 난수를 발생(1~100사이의 수) 해서 50이상인지, 미만인지 구분하여 찍기
const randomNumber = Math.ceil(Math.random() * 100) >= 50 ? '50이상' : '50이하';
console.log(randomNumber);

//Review 04) 숫자를 3 제곱한 수를 구하시오.
const num3 = 2;
result = num3 ** 3; // num3의 3제곱한 수 - 8
console.log(result);
result = Math.pow(num3, 3);
console.log(result);

const str = '5.45'; // 숫자데이터
console.log(parseInt(str));
console.log(parseFloat(str));
console.log(parseInt('50px'));
console.log(Number('50px'));

console.log(isNaN('Hellow')); // 'hello' is Not a Number -> True
console.log(isNaN(333)); // 333 is Not a Number -> False

//Review 05) 숫자가 3개, 가장 큰 값과 가장 작은 값을 구하시오.
const a = 3,
  b = 10,
  c = 5;
result = Math.max(a, b, c);
console.log(`가장 큰 수는 ${result}`);
result = Math.min(a, b, c);
console.log(`가장 작은 수는 ${result}`);

const arr = ['가위', '바위', '보'];
console.log(arr.length);
console.log(arr[arr.length - 1]);
console.log(arr.at(-1));

//Review 06) sum이라는 함수를 만드시오(숫자를 2개를(출입문 2개 -> 파라미터 2개) 받아서 더한값을 출력하는 기계)
function sum(num1, num2) {
  return num1 + num2;
}

result = sum(3, 5);
console.log(result);
