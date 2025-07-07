// ✅ 콜백 함수 실습
// 📌 요구사항
// orderCoffee라는 함수를 작성합니다.
// 첫 번째 인자로 커피 이름을, 두 번째 인자로 콜백 함수를 받습니다.
// 함수 실행 시 콘솔에 커피 준비 중...을 출력한 후, 콜백 함수를 실행합니다.
// 콜백 함수에 커피 이름을 인자로 전달하여 실행합니다.
// 커피가 준비되었습니다: 커피 이름

function orderCoffee(coffeeName, callback) {
  // 여기에 작성
  console.log('커피 준비 중 ...');
  callback(coffeeName);
}

// 여기에 작성
function coffee(coffee) {
  console.log(`커피가 준비되었습니다: ${coffee}`);
}
orderCoffee('아메리카노', coffee);

// ✅ 재귀 함수 실습
// 반복문 없이 재귀 호출을 이용해 1부터 n까지의 합을 계산해봅니다.

// 🧠 재귀 함수 핵심 개념
// 재귀 함수는 두 가지 필수 요소가 있어야 합니다:

// 종료 조건: 재귀 호출을 멈추는 조건
// 재귀 조건: 자기 자신을 호출하는 부분

// 📌 요구사항
// sumUpTo라는 함수를 만듭니다.
// 인자로 받은 수까지 1부터 더한 값을 반환해야 합니다.
// 반복문 없이 재귀로 작성합니다.
// sumUpTo(5)를 실행했을 때, 15가 출력되도록 합니다.

function sumUpTo(n) {
  // 1. 종료 조건: n이 1일 때는?
  // 2. 재귀 조건: n + (n-1까지의 합)
  if (n < 0) {
    return n + sumUpTo(n + 1);
  } else if (n === 0) {
    return 0;
  }
  return n + sumUpTo(n - 1);
}

console.log(sumUpTo(5)); // 15
console.log(sumUpTo(-5)); // 15
