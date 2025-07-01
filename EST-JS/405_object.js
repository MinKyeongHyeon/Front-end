const obj = {
  name: 'Ghost',
  age: 1000,
  sayHllo() {
    return `Hello, ${this.name}`;
  },
  sayBye: function () {
    return `Good bye, ${this.name}`;
  },
  getAge: () => {
    return this.age; //화살표 함수 안에 this는 obj를 가르키지 않으므로 주의.
  },
};

console.log(obj.sayHllo());
console.log(obj.sayBye());
console.log(obj.getAge());

const ghost = {
  age: 1000,
  mbti: 'INFJ',
  say: function () {
    console.log('say hello');
  },
};
console.log(ghost.age, ghost.mbti);
ghost.age = 500;

console.log(ghost);

const type = 'age';
console.log(ghost[type]); // key값이 변수로 들어오면 [변수 || 문자열]

ghost.say();
