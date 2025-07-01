const arr = [10, 20, 30, 40, 50];

//find

const bigger20 = arr.find(x => x >= 20); // 값을 찾아오고 싶을때
const bigger30 = arr.findIndex(x => x >= 30); // 위치값을 찾고 싶을떄
console.log(`20이상의 수는 ${bigger20}`);
console.log(`30이상의 수는 ${bigger30}`);

const bigger40 = arr.find(function (x) {
  return x >= 40;
});
console.log(`40이상의 수는 ${bigger40}`);

const numbers = [15, 20, 17, 3, 80];
//find를 이용해서 20 이상의 수를 추출하시오
const num20 = numbers.find(x => x >= 20);
console.log(num20);

//filter
const over20 = numbers.filter(x => x >= 20);
console.log(over20);

//numbers에서 홀수를 모두 찾아내시오.
const oddNumbers = numbers.filter(number => number % 2);
console.log(oddNumbers);

// filter -> 검색기(조건에 맞는 값만 반환)/ 필요한 갯수만큼 뺄 수 있음
// map -> 조건을 적용해서 새로운 배열로/ 반환 무조건 다 반환.
const doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers);
