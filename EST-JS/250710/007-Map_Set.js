// 1. Map: 키-값 쌍을 저장하는 자료구조.
// key: 숫자, 불리언, 배열, 객체까지도 가능하다.

let m = new Map();

m.set('하나', 1);
m.set(1, '하나');
m.set(true, '참');
m.set([1, 2], '배열');

// console.log(m);
console.log(m.get('하나'));
console.log(m.get('1'));
console.log(m.get(true));
console.log(m.get([1, 2])); //undefined

const key = [2, 3];
m.set(key, '배열2');
console.log(m.get(key));

// 존재 여부 확인
console.log(m.has('하나')); // true
console.log(m.has('둘')); // false

// 삭제
m.delete('하나');
m.clear(); //전체삭제
console.log(m);

//객체의 size(길이)
console.log(m.size); //4

const m2 = new Map();
m2.set('name', '라이캣');
m2.set('age', '10');

for (const [key, value] of m2) {
  console.log(`${key}: ${age}`);
}
//  객체 순회도 가능

// 2. Set: 중복되지 않은 값을 저장하는 자료 구조.

const s = new Set();
console.log(s);

const s2 = new Set([1, 2, 3, 4, 5]);
console.log(s2);

const s3 = new Set([1, 1, 1, 2, 3, 3, 3, 4, 5, 5]);
console.log(s3); // 중복된 값은 저장하지 않음.

// 값 추가
const s4 = new Set();
s4.add(1);
s4.add(5);
s4.add(5); // 중복된 값은 제거함

s4.add('hello');
s4.add(true);

console.log('s4', s4);
console.log('s4size: ', s4.size);

console.log(s4.has('hello')); // true
console.log(s4.has('world')); // false

s4.delete('hello');
console.log(s4);

//순회
for (const item of s4) {
  console.log(item);
}
s4.forEach(value => {
  console.log(value);
});

// 집합 연산
const setA = new Set('apple', 'banana');
const setB = new Set('banana', 'kiwi');

console.log(setA);
console.log([...setA]);
console.log([...setB]);
console.log([...setA, ...setB]);

const setC = new Set([...setA, ...setB]);

async function message() {
    console.log("1");
    const hello = await new Promise((resolve) => {
        console.log("2");
        setTimeout(() => {
            console.log("3");
            resolve("hello");
        }, 1000);
    });
    console.log("4", hello);
}
message();
console.log("5");