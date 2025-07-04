// 클래스 생성하기
class Car {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  sayName() {
    console.log(
      `이 차의 이름은 ${this.name}이고, 가격은 ${this.price}만원 입니다.`
    );
  }
}

const car1 = new Car('JEEP', 7000);
const car2 = new Car('G-wagon', 10000);

car1.sayName(); // 이 차의 이름은 'JEEP'이고, 가격은 7000만원 입니다.
car2.sayName();
