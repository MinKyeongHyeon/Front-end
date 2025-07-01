//friend1, friend2, friend3
// name, age, mbti

const friend1 = { name: 'zeezee', age: 1000, mbti: 'ENTP' };
const friend2 = { name: 'soulgom', age: 100, mbti: 'ENFJ' };
const friend3 = { name: 'binky', age: 33, mbti: 'ISTJ' };

const friends = [friend1, friend2, friend3];
console.log(friends);

const drinkMenu = {
  americano: 3500,
  latte: 5000,
};
const cupSize = {
  small: 0,
  medium: 1000,
  large: 2000,
};
const orderMenu = 'americano';
const orderCount = 3;
const orderSize = 'large';

console.log((drinkMenu[orderMenu] + cupSize[orderSize]) * orderCount);
