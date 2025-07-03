const user = { name: 'zeezee', age: '17' };

//hasOwnProperty 속성이 있는지 확인하기.

console.log(user.hasOwnProperty('name'));
console.log(user.hasOwnProperty('mbti'));

// Object.hasOwn(Object, key) <- 좀 더 최신 문법
console.log(Object.hasOwn(user, 'name'));
console.log(Object.hasOwn(user, 'mbti'));
