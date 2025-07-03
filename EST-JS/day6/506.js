const students = [
  { name: 'Ghost', score: 85 },
  { name: 'Camel', score: 92 },
  { name: 'Mui', score: 78 },
];

// students data type = array
// 배열에 요소추가 메서드 -> Array.prototype.push()
// 학생을 추가 , name : 'zeezee', score : 50
students.push({ name: 'zeezee', score: 50 });

console.log(typeof students);
console.log(Array.isArray(students)); //array인지 확인하는 정적메서드

const arr = [30, 40, 50, 60];
let arr2 = [];
const over50 = arr.filter(over => (over >= 50 ? arr2.push(over) : null));
console.log(arr2);

// students 중에 score가 80점 이상인 요소를 배열로 추출하시오.
const over80 = students.filter(x => x.score >= 80).map(x => x.name);
console.log(`점수가 80점 이상인 학생은 ${over80}입니다.`);

const numbers = [11, 2, 23, 1, 55];
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.sort((a, b) => b - a));

//students 성적순으로 정렬
console.log([...students].sort((a, b) => b.score - a.score));
// 여기에도 오브젝트를 붙일 수 있다니 ..!

console.log(students);

// 아스키와 관련이 있음.
const alphabets = ['Apple', 'Banan', 'apple', 'Zebra'];
alphabets.sort((a, b) => a.localeCompare(b));
console.log(alphabets);
alphabets.sort((a, b) => b.localeCompare(a));
console.log(alphabets);
