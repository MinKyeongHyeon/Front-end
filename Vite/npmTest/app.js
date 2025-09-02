import dog from "./dog.png";

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `<img src="${dog}">`;
});

class ViewerApp {
  constructor() {
    this.txt = "Hello Lions";
    this.viewer = document.querySelector('.viewer');
    this.viewer.textContent = this.txt;
  }

  push() {
    const inpTxt = document.querySelector('.inp-txt');
    this.viewer.textContent = inpTxt.value;
  }
}

// Jasmine 테스트를 위해 export
window.ViewerApp = ViewerApp;
