import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 300px;
`;

// props이용하기
function Image(props) {
  console.log(props.catUrl);
  console.log(props.name);
  const catUrl = props.catUrl;
  return <StyledImage src={catUrl}></StyledImage>;
}
export default Image;
