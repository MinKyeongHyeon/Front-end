// 호이스팅

console.log(a); //undefined 밑에 var a;를 찾아서 위로 호이스팅하지만 값이 없으므로.
var a = 5;
console.log(a);

console.log(b); //ReferenceError: Cannot access 'b' before initialization
//호이스팅이 일어난다. (let b 를 위로 올려줌) 그러나  값이 들어가지 못하게 되어있음.
let b = 10;
console.log(b);
//  var 변수 스코프(함수)
function scope() {
  var a = 'Hello';
  if (true) {
    var a = 'World';
    console.log(a);
  }
  console.log(a);
}
scope();

// 변수 스코프(블럭) - let, const
function scope2() {
  let b = 'Hello';
  if (true) {
    let b = 'World';
    console.log(b);
  }
  console.log(b);
}
scope2();
