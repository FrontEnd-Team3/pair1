import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";

const ProfileSideNav = () => {
  return (
    <S.SideNavContainer>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <LinkContainer to="/profile/">
            <Nav.Link>회원정보</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/profile/edit">
            <Nav.Link>회원정보 수정</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>작성한 글</Nav.Item>
        <Nav.Item>댓글</Nav.Item>
        <Nav.Item>보관함</Nav.Item>
      </Nav>
    </S.SideNavContainer>
  );
};

const SideNavContainer = styled.div`
  background-color: yellow;
  width: 300px;
  height: 1000px;
  padding: 15px;
  div > div {
    padding: 15px 0 15px 10px;
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
  div > div:hover {
    background-color: lemonchiffon;
  }
`;

const S = { SideNavContainer };

export default ProfileSideNav;