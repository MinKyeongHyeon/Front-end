const blood = 'bloodType';
//computed property names
// ES6에서는 객체 리터럴에서 동적으로 키를 생성할 수 있는 기능이 추가되었습니다.
// 대괄호([])를 사용하여 변수나 표현식을 키로 사용할 수 있습니다.
// 이 기능을 "computed property names"라고 합니다.
const user = {
  name: 'zeezee',
  [blood]: 'B',
  [3 + 5]: 8,
  ['best' + 'Friend']: 'binky',
};

console.log(blood, user.bloodType);
console.log(user[3 + 5]);
console.log(user.bestFriend);
