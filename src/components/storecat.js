import React from "react";
import { inject } from "mobx-react";

function StoreCat(props) {
  console.log(props);
  const { url } = props.catStore;
  return (
    <>
      <div>스토어캣</div>
      <div>{url}</div>
    </>
  );
}

// inject(스토어이름) : 함수형태로 리턴
// 컴포넌트에서 스토어로 접근할 수 있도록 한다.
// 연속적으로 실행. 리턴하는 함수에 StoreCat를 실행
// 컴포넌트에서 해당스토어를 props로 전달받아서 사용
// catStore에 Storecat를 주입
export default inject("catStore")(StoreCat);
// export default StoreCat;
