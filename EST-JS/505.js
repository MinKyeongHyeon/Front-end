/**
 * Object.key()
 * 객체의 키를 배열로 변환
 */
const person = { name: 'Ghost', age: 20, mbti: 'INFJ' };

console.log(Object.keys(person));
console.log(Object.values(person));

console.log(Object.entries(person));

const user = {
  name: 'zeezee',
  age: 80,
};

/**
 * user key, value, [key,value]
 */

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
