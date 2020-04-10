import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "./image";

function Cat() {
  //배열을 분해. 이름은 상관없음
  const [url, setUrl] = useState("");
  //매개변수를 두개 받음. 첫번째가 콜백함수.
  // 두번째가 배열.=> vue의 mount랑 비슷한 느낌
  useEffect(() => {
    // 마운트 될 때 실행될 로직을 써준다.
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        // const data = res.data를 축약한 것
        // 바로 이렇게 분해하기 위해서는 data라는 항목이름이 같아야함
        const { data } = res;
        setUrl(data.message);
        console.log(data);
      })
      // 화면ㅇ 가장 처음 렌더링 될때만 실행되고 업데이트 할 경우
      // 실행할 필요가 없는 경우 함수 두번째 파라미터에 빈배열
      .catch((res) => console.log("error"));
  }, []);
  return (
    <>
      <div>cat API</div>
      <div>받아온 url : {url}</div>
      <Image catUrl={url} name="댕댕이" />
    </>
  );
}

export default Cat;
