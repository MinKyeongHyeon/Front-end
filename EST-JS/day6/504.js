/**
 * key  in object
 * 해당 key가 객체에 있는지 존재여부를 boolean으로 출력
 */

const user = {
  name: 'zeezee',
  age: 38,
};

console.log('name' in user);
console.log('color' in user);

/** for ...in 객체를 순회하면 key값을 출력한다.(배열에서는 index값을 출력하며
 * 잘 사용하지 않는다. 배열안에 추가 속성이 있으면 전부 순회하기 때문.)
) */

const arr = ['a', 'b', 'c'];
//for in 은 배열에 사용할 수는 있지만 잘 안쓰인다.
for (const idx in arr) {
  console.log('array : ', idx);
}
//for in을 사용하면 실제 키 값에 접근한다.
for (const key in user) {
  console.log('object : ', key, user[key]);
}

// 객체 person 속성에서 age 속성을 삭제하세요
const person = { name: 'Ghost', age: 20 };
delete person.age;
console.log(person);

// 객체 person에 모든 속성(key) 이름을 배열로 출력하세요

let arr2 = [];
for (const key in person) {
  arr2.push(key);
}
console.log(arr2);
