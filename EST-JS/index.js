const fruits = ['apple', 'banana', 'mango', true];

console.log(fruits[2]); // apple

const friend1 = { name: 'Ghost', age: 1000 }; //Object
const friend2 = { name: 'ejey', age: 500 }; //Object

const friends = [friend1, friend2]; //Array of Objects
console.log(friends);

fruits[0] = 'Orange';
console.log(fruits[0]); //const 여도 원시타입이 아니기때문에 data를 변경할 수 있다.

friend1.age = 100;
console.log(friend1.age);

friends[0].age = 200;
console.log(friends[0].age);

// "."을 이용해서 오브젝트에 접근 가능.
