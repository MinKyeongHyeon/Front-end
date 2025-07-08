// 1. call() : 즉시 호출과 동시 this를 바꿔주는 방법
const user = {
  name: '빙키',
  sayName() {
    console.log(this);
    console.log(`내 이름은 ${this.name}`);
  },
};

const bot = {
  name: '빙키봇',
  sayHello() {
    console.log('hello');
  },
};

user.sayName();
user.sayName.call(bot);

// 2. apply
// call과 동일하게 동작하지만, 인자를 배열로 받는다는 차이만 있다!
function introduce(age, hobby) {
  console.log(`내 이름은 ${this.name}, ${age}살, 취미는 ${hobby}`);
}

const person = { name: '채준' };
introduce.call(person, 20, '요가');
introduce.apply(person, [20, '요가']); //인자를 배열로 전달

// 3. bind
// 새로운 함수를 this를 객체에 고정해서 저장.
const user2 = {
  name: '빙키2',
  sayName() {
    console.log(`내 이름은 ${this.name}`);
  },
};

const guest = { name: '게스트' };
// this를 객체 guest로 고정!
const bindFunc = user2.sayName.bind(guest);
console.log(bindFunc);
bindFunc();
