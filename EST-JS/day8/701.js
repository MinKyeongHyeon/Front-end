// function print(){
//   console.log('3초 후에 실행되는 print 함수')
// }
//setTimeout : 내가 지정한 시간이후에 매개변수로 돌아온 함수를 실행하겠다

// setTimeout(print, 3000);

function sayHello(name) {
  console.log(`Hello, ${name}!`);
}
// setTimeout(() => {
//   sayHello('Ghost');
// }, 3000)

setTimeout(sayHello, 3000, 'Ghost');
