class Robot {
  //초기값 설정
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`삐빅- 저는${this.name}입니다.닝겐.`);
  }

  move() {
    console.log(`${this.name}이 이동중입니다.닝겐.`);
  }
}

/// 인스턴스 생성
const robot1 = new Robot('빙키봇');
const robot2 = new Robot('지지봇');

console.log(robot1, robot2);
robot1.introduce();
robot2.introduce();
robot1.move();

//클래스 상속 : 기존 클래스의 기능을 그대로 물려받고, 자기만의 기능이나 속성을 추가하는 것.
// 기존 클래스: 부모클래스, 기반 클래스
// 상속 받는 클래스 : 자식 클래스, 파생 클래스

class BabyRobot extends Robot {
  // 생략 가능 => super(...args) 를 통해 부모 클래스의 생성자를 호출
  constructor(name, age) {
    super(name); // 호출하지 않으면 에러 => 꼭 먼저 호출해야 한다!
    this.age = age;
    this.company = '싱푸미엔관';
  }
  // 오버라이딩 : 부모 클래스의 메서드를 재정의
  introduce() {
    console.log(`삑- 저는 ${this.company}의 ${this.name}입니다.닝겡.`);
  }
}

const babyRobot = new BabyRobot('베이비빙키', 10);
console.log(babyRobot);
babyRobot.introduce();
