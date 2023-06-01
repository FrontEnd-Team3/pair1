import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideNav = () => {
  return (
    <SideNavContainer>
      <StyledNav variant="pills" className="flex-column">
        <Nav.Item>
          <Link to="/profile/" component={NavLink}>
            회원정보
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/profile/edit" component={NavLink}>
            회원정보 수정
          </Link>
        </Nav.Item>
        <Nav.Item>작성한 글</Nav.Item>
        <Nav.Item>보관함</Nav.Item>
      </StyledNav>
    </SideNavContainer>
  );
};

const SideNavContainer = styled.div`
  background-color: #fafafa;
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

export default SideNav;
