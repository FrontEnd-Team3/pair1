import styled from "styled-components";
import { Link } from "react-router-dom";

const ProfileSideNav = () => {
  return (
    <S.SideNavContainer>
      <li>
        <Link to="/profile/">회원정보</Link>
      </li>
      <li>
        <Link to="/profile/edit">회원정보 수정</Link>
      </li>
      <li>작성한 글</li>
      <li>댓글</li>
      <li>보관함</li>
    </S.SideNavContainer>
  );
};
const SideNavContainer = styled.ul`
  display: none;
  background-color: yellow;
  width: 300px;
  height: 1000px;
  list-style: none;
  padding: 0;
  li {
    padding: 15px 0 15px 10px;
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
  li:hover {
    background-color: lemonchiffon;
  }
`;
const S = { SideNavContainer };
export default ProfileSideNav;
