const a = 3 > 5; // false
console.log(a, typeof a); //boolean

const b = 5;
console.log(typeof b); //number

const c = '5';
console.log(typeof c); //string

const d = undefined;
console.log(typeof 3); // undefined

const e = null;
console.log(typeof e); //object(null object)
//typeof로 데이터타입을 확인할 수 있다.

const f = 2 + '2'; //number + string = string(자동형변환)
console.log(`${f}는 ${typeof f}이다.`);

const g = 2 * '2'; //number * string = number(자동형변환)
console.log(`${g}는 ${typeof g}이다.`);

const number = '15';
const result = Number(number) + 3; //명시적 형변환
console.log(result);

console.log(+number); //단항
console.log(+number + 3);

const baseFont = 16;
const targetFont = 24;
const emFont = targetFont / baseFont;
console.log(`${targetFont}px는 ${baseFont}px의 ${emFont}em 입니다.`);

const baseFont = 16;
const targetFont = 24;
const emFont = targetFont / baseFont;
console.log(`${targetFont}px는 ${baseFont}px의 ${emFont}em 입니다.`);

function pxToEm(target) {
  //파라미터 (매개변수)
  const em = target / 16;
  console.log(`${target}px은 ${em}em 이지롱~`);
}

pxToEm(24); //Argument (인자) !변수재할당이 아님.
pxToEm(30);
pxToEm(40);
