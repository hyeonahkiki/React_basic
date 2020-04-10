import React, { useState } from "react";
import styled from "styled-components";
// import { inject } from "mobx-react";

//styled사용하기. styled태그이름(태그 뭐든지 됨)
// const RedH1 = styled.h1`
//   color: red;
// `;

// const BlueButton = styled.button`
//   background-color: blue;
//   color: white;
// `;

// components단위로 css를 주기가 편함
const CountWrapper = styled.div`
  padding: 3rem;
  h1 {
    color: ${(props) => props.theme.mainColor};
  }
  button {
    color: green;
  }
  .title {
    font-weight: bold;
  }
`;

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
    <CountWrapper abs="1">
      <div className="title"> 카운터 </div> <h1> {number} </h1>{" "}
      <button onClick={onIncrease}> +1 </button>{" "}
      <button onClick={onDecrease}> -1 </button>
      {/* <h1>{url}</h1> */}
    </CountWrapper>
  );
}

// 내보내줘야 쓸 수 있다.
export default Counter;
// export default inject("catStore")(Counter);
