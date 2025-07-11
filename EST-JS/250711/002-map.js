// Map: 모든 타입을 키로 사용할 수 있는 객체

// 생성
const emptyMap = new Map();
console.log(emptyMap);
// 값을 추가할 때 set()
// '하나'=> 1

// 초기 데이터와 함께 생성할때 , 2차원 배열 (키-값 쌍)
const mapWithData = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
]);
console.log(mapWithData);

// 크기 확인 - 객체와 차이점
const obj = {
  name: 'binky',
};
// console.log(obj.length); //undefined, 객체는 바로 크기를 확인하는 속성이 없음
console.log(Object.keys(obj).length); // 1

console.log(mapWithData.size); //Map()객체는 .size를 통해 쉽게 크기 확인 가능

// 존재 여부 확인
const myMap = new Map();
myMap.set('name', '유진');
myMap.set('하나', 1);
myMap.set(1, '하나');
myMap.set(true, '참');
myMap.set([1, 2], '배열');

// 존재 여부 확인
// Map 객체 - has()
console.log('Map 객체 - has()');
console.log(myMap.has('name')); // true
console.log(myMap.has('address')); // false

// 일반 객체 - in 연산자
console.log('일반 객체 - in 연산자');
console.log('name' in obj); // true
console.log('address' in obj); // false

//순회 방법
//Map => eterate 형태이기 때문에 어떤 형식으로도 순회 가능
console.log('Map 순회');
for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// 일반 객체 => Object.keys(), Object.values(), Object.entries()
console.log('일반 객체 순회');
Object.keys(obj).forEach(key => {
  console.log(`${key}: ${obj[key]}`);
});

// 객체 -> Map
console.log(obj);
const mapFromObject = new Map(Object.entries(obj));
mapFromObject.set('true', 'boolean');
console.log(mapFromObject);

// Map -> 객체
// Object.fromEntries(): 2차원 배열을 (키-값 쌍) 객체로 변환
const newObject = Object.fromEntries(mapFromObject);
console.log(newObject);

// 순서 보장
// Map은 삽입 순서를 보장한다.
const map = new Map();
map.set('b', 2);
map.set(1, '일');
map.set('a', 1);
console.log(map);

// 일반 객체는 순서를 보장하지 않는다.
const obj2 = {};
obj2['b'] = 2;
obj2[1] = '일';
obj2['a'] = 1;
console.log(obj2); // 순서가 보장되지 않음

// 차이점 정리
/*
 *1. 키 타입
 * - Map: 모든 타입을 키로 사용할 수 있다.
 * - 객체: 문자열을 키로 사용한다.
 * 2. 순서 보장
 * - Map: 삽입 순서를 보장한다.
 * - 객체: 순서를 보장하지 않는다.
 * 3. 성능: 대량의 데이터를 수정하거나 삭제 등 다룰 때 => Map 객체가 성능이 더 좋다!!
 *
 *
 */
