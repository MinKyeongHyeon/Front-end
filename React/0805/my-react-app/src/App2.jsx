// 잘 사용하는 이벤트 종류
// 3번까지만 외우셔도 상관없습니다.
// 1. onClick: 클릭이벤트
// 2, onChange: 입력값 변경 이벤트
// 3. onSubmit: 폼 제출 이벤트
//---

// 나머지 이벤트
// 4. onMouseOver: 마우스 오버 이벤트
// 5. onMouseOut: 마우스 아웃 이벤트
// 6. onFocus: 입력필드에 포커스가 맞춰졌을 때
// 7. onInput: 입력 필드의 값이 변경될 때

function log() {
  console.log("hello, world");
  console.log("Input changed", event.target.value);
}
function App() {
  return (
    <>
      <h1>Hello, World!</h1>
      {/* 1. onclick이 아니라 onClick으로 순수한 javascript가 아님을 알 수 있습니다.
      2. onClick안에 함수를 실행시키는것이 아니라 함수를 전달합니다.
      누구에게? onClick에게 전달하는 것이고 리액트가 이 함수를 실행하는 것입니다. */}
      <button onClick={log}>클락혀~</button>
      <input type="text" onChange={log} />
    </>
  );
}

export default App;
