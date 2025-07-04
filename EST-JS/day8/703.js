// 1초에 한 번씩 hello 찍기
// setInterval(() => console.log('안녕하십니까 주인님!'), 1000);

// // 현재시각 3초에 한 번씩 시간 보여주기
// console.log(new Date().toLocaleString());
// console.log(new Date().toLocaleTimeString());
// console.log(new Date().toLocaleDateString());

// setInterval(() => console.log(new Date().toLocaleTimeString()), 3000);

// 3) 0.5초마다 카운트 증가 : 출력결과 -> Count 1 -> Count 2 -> ...
// let count = 0;
// setInterval(() => {
//   console.log(`Count ${count++}`);
// }, 500);

// const news = ['코딩수업 마지막날 ㅜㅜ', 'Javascript 최고', '그동안 즐거웠다.'];
// let i = 0;
// setInterval(() => {
//   console.log(news[i]);
//   i = (i + 1) % news.length;
// }, 1000);

// 1초에 한 번씩 Hello가 찍히다가, 3초 후에는 멈추기
const sayHello = () => console.log('Hello');
const counter = setInterval(sayHello, 1000);
setTimeout(() => {
  clearInterval(counter);
}, 3000);

// 1초마다 1~5까지 출력한 후에 멈추기 -> count 변수 감시 ..
let count = 1;

const printCount = setInterval(() => {
  console.log(count);
  if (count >= 5) {
    clearInterval(printCount);
  }
  count++;
}, 1000);
