// for ...of
const fruits = ['apple', 'mango', 'banana'];
for (const fruit of fruits) {
  console.log(fruits);
}

const str = 'hello';
for (const spell of str) {
  console.log(spell);
}
//forEach는 배열 전용 메소드이고, for ..of는 배열 뿐 아니라 이터러블 객체에 사용가능.
console.clear();

//while
let i = 4; //while문은 밖에서 i 를 초기화
while (i < 10) {
  console.log(i);
  i++;
}
console.log('while문이 끝났습니다.');

let j = 4;
do {
  // do..while문은 최소 1번은 실행됨
  console.log(j);
  j++;
} while (j < 10);

console.clear();
let k = 1; // 1부터 2씩 증가하는 값을 찍으세요. 10이상이 되면, 멈추기
while (k < 10) {
  if (k === 5) {
    k += 2;
    continue;
  }
  console.log(k);
  k += 2;
}
// 위의 반복문에서 숫자가 5는 찍히지 않도록 continue를 이용하시오.
