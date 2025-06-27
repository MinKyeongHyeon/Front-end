let str = 'Hello World';
console.log(str.length);

console.log(str.indexOf('l'));
console.log(str.lastIndexOf('l'));

str = 'Hello World, hello, weniv!';
console.log(str.includes('o'));
console.log(str.includes('a'));

str = 'Hello World';
console.log(str.slice(1, 4)); //4 전까지
console.log(str.slice(4)); //4이후부터 끝까지
console.log(str.slice(-4)); // 뒤에서 부터

const email = 'ghost@gmail.com';
const userName = email.slice(0, email.indexOf('@'));
console.log(userName);

const mailName = email.indexOf('@');
console.log(mailName);

console.log(str.toLowerCase());
console.log(str.toUpperCase());

const str2 = 'A.B.C';
const newStr = str2.split('.');
console.log(newStr);

const domain = email.split('@');
console.log(domain[1]);
console.log(email.split('@')[1]);

// https://www.ghost.com/about <- 이런식으로 해당하는 페이지를 찾을 수도 있다.
const url1 = 'https://www.ghost.com/about';
const url2 = 'https://www.ghost.com/contactUs';

// 각 URL의 접근페이지명을 출력하시오.

let page = 0;
page = url1.split('/').at(-1);
console.log(page);
page = url2.split('/').at(-1);
console.log(page);

//trim 실습
console.clear();
const str3 = '       hello        world        ';
console.log(str3.trimStart(), '-'); //앞쪽 공백 모두 제거 (뒷공백 있음)
console.log(str3.trimEnd(), '-'); //뒷쪽 공백 모두 제거 (앞공백 있음)
console.log(str3.trim(), '-'); //앞뒤공백 모두 제거

//repeat() <- 반복하기
const star = '*';
console.log(star.repeat(50));

//replace(),replaceAll() 원본을 바꾸지는 않음!!
console.log(email.replaceAll('@', ''));
console.log(email.replace('@', '*'));
console.log(email);

//padStart(), padEnd()
const num = '7'; // 007
const num2 = '29';
console.log(num.padStart(3, '0')); //3자리를 채우면서 앞에 0 채우기 007
console.log(num2.padStart(3, '0')); //029

console.log(num.padEnd(5, '0'));
console.log(num2.padEnd(5, '0'));

//천원단위로 금액을 입력받았을때
const coin = '3200'; //3200000 삼백이십만원
console.log(coin.padEnd(coin.length + 3, '0'));

// coin 입력, cost 뺀 나머지 금액만 지원을 받을 수 있을때에, 최종 지원 금액은 얼마인가요?
const cost = '1000';
const supportCash = (Number(coin) - Number(cost)) * 1000;
console.log(`${supportCash}를 지원받을 수 있습니다.`);
