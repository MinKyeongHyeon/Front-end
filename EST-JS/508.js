/**
 * Object.assign({}:target,복제할객체) -> 얕은 복사
 *
 */

const user = { name: 'Ghost', age: 1000 };
const irang = { name: 'Irangi', bloodType: 'B' };
const newUser = Object.assign(irang, user);
newUser.mbti = 'INTP';
console.log(user);
console.log(newUser);
console.log(user === newUser);

const user2 = {
  name: 'Ghost',
  age: 1000,
  pets: { dob: 'Boddy', perret: 'Cherry' },
};
//user2 를 newUser2로 복사해서, age를 500으로 변경해보세요.
const newUser2 = Object.assign({}, user2);
newUser2.age = 500;
console.log(user2);
console.log(newUser2);
console.log(user2 === newUser2);
newUser2.pets.dog = 'Bombi';
console.log(user2.pets.dog, newUser2.pets.dog);
console.log(user2.pets.dog === newUser2.pets.dog);

// Deep copy with json
console.log(user2);
console.log(JSON.stringify(user2));
const nuewUser3 = JSON.parse(JSON.stringify(user2));
console.log(typeof nuewUser3);
console.log(nuewUser3);
nuewUser3.pets.perret = 'Alpha';
console.log(user2.pets.perret, nuewUser3.pets.perret);
console.log(user2.pets.perret === nuewUser3.pets.perret);
