import { useMouseLocation } from "./Hooks/useMouseLocation";
import { useScrollThrottle } from "./Hooks/useScrollThrottle"; // 추가
import { useScroll } from "./Hooks/useScroll";

function App() {
  const mouseLocation = useMouseLocation({ x: 0, y: 0 });
  // console.log(mouseLocation);
  const isBottom = useScroll();
  const isBottomThrottle = useScrollThrottle(200); // 200ms마다 한 번만 체크

  return (
    <div style={{ backgroundColor: "blue", height: "1000px" }}>
      <div style={{ color: "white", padding: 16 }}>
        <div>
          마우스 위치: {mouseLocation.x}, {mouseLocation.y}
        </div>
        <div>일반 스크롤 하단 도달: {isBottom ? "YES" : "NO"}</div>
        <div>쓰로틀 스크롤 하단 도달: {isBottomThrottle ? "YES" : "NO"}</div>
      </div>
    </div>
  );
}

export default App;
