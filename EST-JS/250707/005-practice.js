// TodoItem 클래스
// 할 일 항목을 표현합니다.
// 프로퍼티
// todo: 문자열로 된 할 일 내용
// isDone: 완료 여부 (기본값 false)
// 메서드
// changeStatus() : 완료 여부를 토글합니다.

// TodoList 클래스
// 할 일 항목들을 담는 리스트입니다.
// 프로퍼티
// items: 할 일들을 담는 배열
// 메서드
// addItem(text) : 새로운 할 일 항목을 추가하고 반환
// getItems() : 전체 할 일 목록을 반환
// removeItem(index) : 해당 인덱스의 할 일을 삭제, 삭제 여부에 따라 불리언 값 반환
// getLeftTodoCount() : 아직 완료되지 않은 할 일 개수를 반환

// 🧑‍💻 실습 안내
// 실습 시간: 20분
// 요구사항에 따라 코드 완성하기
// 다 작성하신 분들은 아래 테스트 코드를 활용해 내가 만든 클래스가 잘 작동하는지 콘솔로 확인해보세요.
// [실습] 투두리스트 만들기
// 1. TodoItem 클래스 만들기
class TodoItem {
  constructor(todo, isDone = false) {
    //기본값 설정은 매우 중요한 부분입니다. 다른 사용자나 미래에 내가 사용할때를 위해 초기화를 확실하게 하는게 좋음.
    // 여기에 코드 작성
    this.todo = todo;
    this.isDone = isDone;
    //this.id
  }

  changeStatus() {
    // 여기에 코드 작성
    this.isDone = !this.isDone;
    return this.isDone;
  }
}

const item1 = new TodoItem('냉면먹기');
item1.changeStatus();
console.log(item1);

// 2. TodoList 클래스 만들기
class TodoList {
  constructor() {
    // 여기에 코드 작성
    this.items = [];
  }

  addItem(text) {
    // 여기에 코드 작성
    const newTodo = new TodoItem(text, false); //이미 false로 초기화되어있지만 조금 더 명시적으로 작성하기 위해 넣음.
    this.items.push(newTodo);
    return newTodo;
  }

  getItems() {
    // 여기에 코드 작성
    return this.items;
  }

  removeItem(index) {
    // 여기에 코드 작성
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }

  getLeftTodoCount() {
    // 여기에 코드 작성
    return this.items.filter(item => !item.isDone).length;
  }
}

const myTodoList = new TodoList();
const item2 = myTodoList.addItem('제주도 놀러가기');
const item3 = myTodoList.addItem('싱푸미엔관 가보기');
const item4 = myTodoList.addItem('위니브 가서 밥 얻어먹기');

console.log('할 일 목록', myTodoList.getItems());
item2.changeStatus();
console.log('남은 할 일 개수', myTodoList.getLeftTodoCount());
myTodoList.removeItem(0);
console.log('할 일 목록', myTodoList.getItems());
