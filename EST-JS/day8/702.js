// 몇 초에 한 번 반복하겠다.

function sayHello(name) {
  console.log(`hello, ${name}`);
}

const timerID = setInterval(sayHello, 1000, 'Ghost');
clearInterval(timerID);
function sayBye(name) {
  console.log(`Good-bye,${name}`);
}

const timer = setTimeout(sayBye, 3000, 'Ghost');
clearTimeout(timer);
