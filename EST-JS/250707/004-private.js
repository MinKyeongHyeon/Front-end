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

//1. 기존 방식
class PwRobot extends Robot {
  constructor(name, password) {
    super(name);
    this.password = password;
  }

  login(password) {
    if (password === this.password) {
      console.log(`${this.name}스카이넷 접속 성공...삐빅`);
    } else {
      console.log(`${this.name}스카이넷 접속 실패...삐빅`);
    }
  }
}

const pwRobot = new PwRobot('지지봇', '1234');
pwRobot.introduce();
pwRobot.login('1234'); // 접속 성공

//문제상황: 외부에서 민감한 정보에 접근/수정 가능
console.log(pwRobot.password);
pwRobot.password = '0000';
pwRobot.login('1234'); // 접속 실패

//2. 비공개 프로퍼티를 사용한 방식
class SafeRobot extends Robot {
  #password; // 비공개 필드
  constructor(name, password) {
    super(name);
    this.#password = password;
  }

  login(password) {
    if (password === this.#password) {
      console.log(
        `${this.name} 스카이넷 접속 성공...삐빅..지구 멸망까지 3초전..`
      );
    } else {
      console.log(`${this.name} 스카이넷 접속 실패...삐빅`);
    }
  }
  //password 확인
  get password() {
    return this.#password;
  }
  //password 수정
  set password(newPassword) {
    this.#password = newPassword;
  }
}

console.log('--------비공개 프로퍼티 사용--------');
const safeRobot = new SafeRobot('빙키봇', '1234');
safeRobot.introduce();
safeRobot.login('1234');
// safeRobot.#password = '0000'; // 에러 발생: 비공개 필드에 직접 접근 불가
safeRobot.password = '0000';
safeRobot.login('0000');
// get set을 사용해도 보이기에는 일반 프로퍼티와 작성법이 같으므로 꼭 다른사람에게 보여줄때 설명을 적어놓자.

//정리
// 1. #를 이용한 비공개 프로퍼티 사용 -> 직접 접근을 막기 위함.
// 2. get, set을 사용해서 필요한 경우에만 간접 접근 허용
// 3. 사용자나 협업자가 혼동되지 않도록 주석, 설명 남기는 것이 중요!
