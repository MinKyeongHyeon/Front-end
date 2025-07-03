//이름과 나이를 입력받아서 ~님 나이는 00세 입니다.
const person = (a, b) => `${a}님 나이는 ${b}세 입니다.`;
console.log(person('Ghost', 1000));

//2. 더하기 함수 a + b 인데, 만약 b가 입력되지 않았을경우 b의 기본값은 10이 되도록 함수를 만드세요.
const sum = (a, b = 10) => a + b;

//3. 함수의 인자로 숫자를 2개 받아서 배열로 리턴 -> 1, 2 -> return [1, 2]
const arr = (a, b) => [a, b];
console.log(arr(1, 2));

//4. 함수의 인자로 이름과 나이를 받아서 객체로 리턴
const obj = (a, b) => ({ name: a, age: b }); //(name, age) => ({ name, age });도 가능.
console.log(obj('Ghost', 1000));

//5. 연도를 입력받아서 나이를 계산하는 함수 -> getAge(1900) -> 현재 getFullYear 연도를 구해서 차감
const getAge = a => {
  const yaer = new Date().getFullYear();
  return yaer - a;
};
console.log(getAge(1993));

//6 for 문으로 구구단 -> gugudan(3), gugudan(5) / 제한사항 구구단은 2~9단까지만 지원
function gugudan(num) {
  if (num < 2 || num > 9) {
    const limit = '계산 범위 밖입니다.';
    return limit;
  }
  let result = [];
  for (let i = 1; i <= 9; i++) {
    result.push(num * i);
  }
  return result.map((a, b) => `${num} x ${b + 1} = ${a}`).join('\n');
}
console.log(gugudan(3));

//7 구조분해할당 -> 아래 배열을 앞의 2개만 변수로 받고, 나머지는 나머지 연산자로 할당하여 받으세요.
const arr2 = [10, 20, 30, 40];
const [a, b, ...rest] = arr2;
console.log(a, b, rest);

//8 구조분해할당 -> 아래 객체중 이름과 이메일만 변수로 할당하여 받으세요, 이때 이름은 userName으로 변경해서 받으세요.
const user = { id: 1, name: 'Ghost', age: 1000, email: 'ghost@gamil.com' };
const { name: userName, email } = user;
console.log(userName, email);

const users = [
  { name: 'ghost', age: 1000 },
  { name: 'irangi', age: 500 },
  { name: 'nuvis', age: 30 },
];

const stringUsers = JSON.stringify(users);
console.log(stringUsers, typeof stringUsers);

const objectUsers = JSON.parse(stringUsers);
console.log(objectUsers, typeof objectUsers);
