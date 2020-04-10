import React from "react";
// observer : components를 변한게 있으면 반영시키겠다
import { inject, observer } from "mobx-react";

function Counter2(props) {
  console.log(props);
  const { number, onDecrease, onIncrease } = props.counterStore;
  // onDecrease, onIncrease가 작동하지만 number에 반영이 안됨
  return (
    <>
      <div>카운터2입니다.</div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </>
  );
}

export default inject("counterStore")(observer(Counter2));
