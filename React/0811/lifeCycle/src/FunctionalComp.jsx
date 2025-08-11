import React, { useState, useEffect, useRef } from "react";

const FunctionalComp = () => {
  const [number, setNumber] = useState(0);

  const firstRender = useRef(true);
  // 첫 렌더인가?(부끄)

  useEffect(() => {
    console.log("마운트했지롱!");

    // 한 번에 다 쓸 수도 있다! 짱이다!
    return () => {
      console.log("언마운트 했지롱!");
      //언마운트는 안하는데?
    };
  }, []);

  // 첫 렌더라면...
  useEffect(() => {
    if (firstRender.current) {
      console.log("나의...첫...렌더....");
      firstRender.current = false;
    } else {
      console.log("다시 렌더링 한거지롱!");
    }
  }, [number]);
  // number가 변할때마다 렌더가 하고있다는거를 알려줌!

  useEffect(() => {
    console.log("업데이트했지롱!!");
  }, [number]);

  const handleClick = () => {
    setNumber((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>한라산 가자잇!!!</button>
      <span>{number}</span>
    </div>
  );
};

//즐건 월요일 화이팅~ \(^오^)/
export default FunctionalComp;
