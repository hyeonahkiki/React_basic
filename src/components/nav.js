import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// 외부에서 가져온 링크, 컴포넌트를 쓸때는 ()를 써준다.
const StyledLink = styled(Link)`
  text-decoration: none;
  color: green;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  li {
    margin-right: 1rem;
  }
`;

// Link : to=어디로 보낼지 . 새로고침없이 매끄럽게 이동가능

function Nav() {
  return (
    <div>
      <StyledUl>
        <li>
          <StyledLink to="/">카운터</StyledLink>
        </li>
        <li>
          <StyledLink to="/cat">캣</StyledLink>
        </li>
        <li>
          <StyledLink to="/chart">차트</StyledLink>
        </li>
      </StyledUl>
    </div>
  );
}
export default Nav;
