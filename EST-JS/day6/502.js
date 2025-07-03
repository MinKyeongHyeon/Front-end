//1 객체 속성 호출하기
const person = { name: 'Ghost', age: 20 };
console.log(person.name);

//2 객체에 새로운 속성 추가하기
person.height = 180;
console.log(person);

//3 fot ...of 문으로 문자열 배열을 모두 소문자로 변환해 새 배열을 만드세요.
const arr = ['A', 'B', 'C'];
let lowerCase = [];
for (const char of arr) {
  lowerCase.push(char.toLowerCase());
}
console.log(lowerCase);
let lowerCase2 = [];
arr.forEach(char => {
  lowerCase2.push(char.toLowerCase());
});
console.log(lowerCase2);

//4 user객체 name, age, pets(dog(이름, 나이),parret(이름,나이))
//sayHello() 메서드 -> `Hello, ${name}`

const user = {
  name: 'zeezee',
  age: 38,
  skills: ['fly', 'swim'],
  pets: {
    dog: {
      name: 'soulgom',
      age: 5,
    },
    parret: {
      name: 'binky',
      age: 2,
    },
  },
  sayHello() {
    return `Hello, ${this.name}`;
  },
};
console.log(user.sayHello());
console.log(user.pets.dog.name);
console.log(user.skills[1]);

delete user.pets;
console.log(user);

//user mbti 추가하기
//user -> age 삭제
//user -> name 변경

user.mbti = 'INTP';
delete user.age;
user.name = 'JeJuDo';
console.log(user);

// 객체에 method를 추가하기

user.sayBye = () => {
  return `Good-bye, ${user.name}`;
};
console.log(user.sayBye());

// method ->mySkills() 나의 능력은 'fly', 'swim' 이야

user.mySkills = function () {
  return `나의 능력은 ${this.skills} 이야`;
};
console.log(user.mySkills());
