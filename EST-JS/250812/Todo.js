class Todo {
  constructor(item, finished) {
    this.item = item;
    this.finished = finished;
  }
  changeState() {
    this.finished = !this.finished;
  }
}

class TodoManager {
  constructor() {
    this.todoList = [];
  }

  addItem(item) {
    this.todoList.push(item);
  }

  getItems() {
    return this.todoList;
  }

  getLeftTodoCount() {
    return this.todoList.map(()=>)
  }
}
