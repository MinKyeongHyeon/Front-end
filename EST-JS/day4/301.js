const numbers = [51, 20, 12, 5, 2];

//01. numbers의 절반값을 구하시오. (단, 정수로)
const halfNumbers = numbers.map(num => parseInt(num / 2));
console.log(halfNumbers);

//02. numbers에서 15 미만인 숫자만 구하시오 [12,5,2]
const under15 = numbers.filter(num2 => num2 < 15);
console.log(under15);

//03. numbers에서 15보다 작은 첫 번째 수를 구하시오. 12
const under15First = numbers.find(num3 => num3 < 15);
console.log(under15First);

const str = '153451';
console.log(str.split(''));
console.log([...str]);
//04. numbers2에서 전체적으로 '5'가 몇개있는지 구하시오.\
const numbers2 = [153, 7, 55];
numbers2str = numbers2
  .toString()
  .split('')
  .filter(number => number === '5').length;
console.log(numbers2str);

const users = ['Daniel', 'Don', 'donald', 'Micheal', 'Juliet'];
//05. users에서 'd'와 'D'가 들어간 이름만 배열로 반환

const nameD = users.filter(name => name.toUpperCase().includes('D'));
console.log(nameD);

//5) 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다.
// //양꼬치는 1인분에 1,2000원, 음료수는 2,000원입니다.
// //정수 n과 k가 매개변수로 주어졌을 때,
// //양꼬치 n인분과 음료수 k개를 먹었다면 총 얼마를 지불해야 하는지
// //return 하도록 함수를 완성해보세요
const yandKochi = (n, k) => {
  const sum = n * 12000 + k * 2000;
  if (n >= 10) {
    return sum - Math.floor(n / 10) * 2000;
  }
  return sum;
};
console.log(yandKochi(10, 3)); // 124000
