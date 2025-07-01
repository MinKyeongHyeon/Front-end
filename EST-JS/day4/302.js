const animals = ['puppy', 'cat', 'parrot'];
let result = animals.filter((animal, index) => index === 2);
// filter에서는 이름,인덱스도 가져올 수 있다.
result = animals.map((animal, index) => index);

console.log(result);
//push, pop, unshift, shift
animals.push('rabbit');
console.log(result);

// 1~2번째에 있는 요소만 가져오기 -> slice를 이용
result = animals.slice(1, 3);
console.log(result);

//animals = ['puppy', 'cat', 'parrot', 'rabbit'];
animals.splice(1, 2, 'Elephant');
console.log('changed animals:', animals);
//['puppy', 'Elephant', 'rabbit']
animals.splice(1, 0, 'cat');
console.log(animals);
console.clear();

//reverse() 배열 요소를 거꾸로 변경(순번) -> 원본을 변경
const arr = ['apple', 'mango', 'banana'];
arr.reverse();
console.log(arr); // ['banana', 'mango', 'apple']



