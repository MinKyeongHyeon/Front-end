import { useScrollObserver } from "./Hooks/useScrollObserver";

function App() {
  const { isBottom, endlineRef } = useScrollObserver();

  return (
    <>
      <div ref={endlineRef} />
      {isBottom ? "스크롤 끝에 닿음" : "아직 안 닿음"}
    </>
  );
}

export default App;
