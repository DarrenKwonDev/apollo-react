import React from "react";
import { Breadcrumb } from "react-bootstrap";
import styled from "styled-components";

const StyledHeader = styled.div`
  height: 30vh;
  background-color: #28abb9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
`;

function Header({ current }) {
  console.log("current", current);
  return (
    <div>
      <StyledHeader>GraphQL Apollo Bootstrap React</StyledHeader>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default Header;
