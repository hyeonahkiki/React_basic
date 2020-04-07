import React, { useState } from "react";

function Counter() {
  //useState(기본값), const[우리가 쓸 변수, 변수를 바꾸는 함수]
  // 상태 다루는 거
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
  };
  const onDecrease = () => {
    setNumber(number - 1);
  };
  return (
    <>
      <div> 카운터 </div> <h1> {number} </h1>{" "}
      <button onClick={onIncrease}> +1 </button>{" "}
      <button onClick={onDecrease}> -1 </button>
    </>
  );
}

// 내보내줘야 쓸 수 있다.
export default Counter;
