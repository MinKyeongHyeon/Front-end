class Taste {
  constructor(taste1, taste2) {
    this.taste1 = taste1;
    this.taste2 = taste2;
  }
  desc() {
    console.log(
      `왜 그 맛이 나느냐? \n ${this.taste1}과 ${this.taste2}의 맛이 나서 맛이 난다 한것이온데..`
    );
  }
}
class grilled extends Taste {
  desc() {
    console.log(
      `왜 그 맛이 나느냐? \n ${this.taste1}과 ${this.taste2}의 맛과 불 맛이나서 맛이 난다 한것이온데..`
    );
  }
}
const hongsi = new Taste('홍시', '홍시이-');
hongsi.desc();
const grilledHongsi = new grilled('홍시', '홍시이-');
grilledHongsi.desc();
