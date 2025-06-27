const str = '123'; //string -> Number(), parseInt(), parseFloat()
const num = 255;
console.log(typeof (num + '')); // 문자열을 더하면 문자열이 되는 방법을 이용해 ''를 더하기도 한다.
console.log(typeof num.toString());
console.log((123).toString());

// array를 string으로
const arr = ['a', 'b', 'c'];
console.log(arr.toString());

//bool을 string으로
console.log(true.toString());

/** object - user 변수에 mbti ->infj // bloodType -> B */

const user = {
  mbti: 'INTP',
};
console.log(user.toString()); //객체타입을 문자열로 그대로 반환

// 객체를 문자열로 바꾸고 싶다면,
console.log(JSON.stringify(user));

//16진수 변환
console.log(num.toString(16));

//랜덤한 RGB값을 구해서 -> 16진수로 변환하시오.
const r = Math.floor(Math.random() * 255);

console.log(r.toString(16).padStart(2, '0'));

const hexColor = `#${createHexValue()}${createHexValue()}${createHexValue()}`;
function createHexValue() {
  const a = Math.floor(Math.random() * 255)
    .toString(16)
    .padStart(2, '0');
  return a;
}
console.log(hexColor);

console.clear();

const num2 = 123.4556789;
const newNum = num2.toFixed(2);
console.log(newNum, typeof newNum, parseFloat(newNum), num2, num2.toFixed(2));

function getRandom(value) {
  return Math.floor(Math.random() * value);
}

const getRandom2 = value => {
  return Math.floor(Math.random() * value);
};
console.log(getRandom2);
