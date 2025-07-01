// Variables

var a = 3;
let b = 12;
const c = 15;

console.log(a);
var a = 5;
// let b = 5; let 과 const는 재선언 불가 let은 재할당 가능
b = 5;
// c = 5; const는 재할당 불가
console.log(a);
console.log(b);
console.log(c);
