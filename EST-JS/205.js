/**Array
 *
 */
const fruits = ['apple', 'mango', 'banana'];

// 추가
fruits.unshift('watermelon', 'lemon');
fruits.push('grape', 'halla-bong');
console.log(fruits);

// 삭제 , shift, top
fruits.pop(); // 맨 뒤에 요소 하나 삭제
console.log(fruits);
fruits.pop(2); // 맨 뒤에 요소 여러개 삭제
console.log(fruits);
fruits.shift();
console.log(fruits); // 맨 앞 요소 하나 삭제

const newFruits = fruits.slice(1, 2);
//fruits.slice(1, 2)는 fruit값을 변화시키지 않고, 고르는 메서드임으로 값을 새로 지정.

console.log(newFruits);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = [...arr1, ...arr2]; // 두 배열 합치기 .concat()메소드도 가능하나 잘 사용하지 않는다.
console.log(newArr);

const whosBig = Math.max(...newArr); // ... <-전개 연산자. 내용을 꺼낸다.
console.log(whosBig);

const str = 'Ghost,World,Sunny';
names = str.split(',');
console.log(names);
const newStr = names.join(':');
console.log(newStr);

const newStr2 = [...str];
console.log(newStr2);

console.clear();

const users = 'Hello world';
console.log(users.indexOf('w'));

const animals = ['🐶', '🐈', '🦜', '🐈'];
console.log(animals.indexOf('🐈'));
console.log(animals.lastIndexOf('🐈'));

console.log(users.includes('w'));
console.log(animals.includes('🐈'));
