// import { LinkContainer } from "react-router-bootstrap";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProfileSideNav = () => {
  return (
    <SideNavContainer>
      <StyledNav variant="pills" className="flex-column">
        <Nav.Item>
          <Link to="/profile/">
            <NavLink>회원정보</NavLink>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/profile/edit">
            <NavLink>회원정보 수정</NavLink>
          </Link>
        </Nav.Item>
        <Nav.Item>작성한 글</Nav.Item>
        <Nav.Item>댓글</Nav.Item>
        <Nav.Item>보관함</Nav.Item>
      </StyledNav>
    </SideNavContainer>
  );
};

const SideNavContainer = styled.div`
  background-color: #f8f9fa;
  width: 300px;
  height: 1000px;
  padding: 15px;
`;

const StyledNav = styled(Nav)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const NavLink = styled(Nav.Link)`
  && {
    padding: 15px 0;
    text-decoration: none;
    color: #212529;
    cursor: pointer;
    background-color: transparent;
    border-radius: 8px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e9ecef;
    }
  }
`;

export default ProfileSideNav;
