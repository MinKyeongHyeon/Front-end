/**
 * 구조분해할당(Destructuring)
 */
const animals = ['puppy', 'cat', 'parret', 'lion', 'tiget', 'duck', 'panda'];
const numbers = [1, 2, 3, 4, 5];

const [a, b, ...rest] = animals;

console.log(rest);

//animals, numbers 합친 새로운 배열을 만드세요.
const newArray = animals.concat(numbers);
// const newArray = [...animals, ...numbers];
console.log(newArray);
const array = calc(10, 2);
console.log(array);

const arr2 = ['apple', 'mango', 'banana'];
//변수 - c, d, e
const [c, d, e] = arr2;
console.log(c);
console.log(d);
console.log(e);

console.clear();

//함수

function calc(a, b) {
  return [a + b, a / b];
}

const [sum, div, multiply = 'No multiply'] = calc(15, 3);
// no multiply를 초기값으로 지정했기때문에 diff랑 다르게 undefined를 배출하지 않음.
console.log(sum, div, multiply, diff);
