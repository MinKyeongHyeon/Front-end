const arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat());
console.log(arr.flat(2));

// isArray ? 로 배열 갯수를 찾을 수 있다

const users = ['Daniel', 'Amy', 'donald', 'Micheal', 'Juliet'];
users.sort();
console.log(users);

const numbers = [51, 20, 12, 1, 22, 5, 2];
numbers.sort((a, b) => a - b);
console.log(numbers);
numbers.sort((a, b) => b - a);
console.log(numbers);

// some() - 배열에 조건을 만족하는 요소가 하나라도 있는지 확인
// every() - 배열의 모든 요소가 조건을 만족하는지 확인
const numbers2 = [1, 2, 3, 4, 5];
const hasEven = numbers2.some(num => !(num % 2));
console.log(hasEven); // true
const allEven = numbers2.every(num => !(num % 2));
console.log(allEven); // false

// 콜백함수
// reduce (reducer 리듀서)
// filter(ture,false -> predicate 함수(boolean값 반환)), some, every
// map ( mapping fuction)

//users에서 'Amy'가 포함되어 있는지 확인
const blacklist = users.some(user => user.includes('Amy'));
console.log(blacklist);
//numbers 에서 3보다 큰 값이 있는지 확인
const bigger3 = numbers.some(num => num > 3);
console.log.apply(bigger3);
const fruits = ['apple', 'banana,', 3];
// 3. fruits변수안에 있는 값이 모두 문자열인지 확인.
const strCheck = fruits.every(fruit => typeof fruit === 'string');
console.log(strCheck);

const emails = ['test@example.com', 'hello@domain.com', 'user@site.org'];
// 이메일 형식이 모두 맞는지 확인 (@와 .이 반드시 있어야함)
const emailForm = emails.every(
  email => email.includes('@') && email.includes('.')
);
console.log(emailForm);

const arr2 = [3, 4];
console.log(Array.isArray(arr2));
//array 인지 따져보기
