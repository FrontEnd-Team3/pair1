import styled from "styled-components";

const ProfileSideNav = () => {
  return (
    <S.SideNavContainer>
      <p>회원정보</p>
      <p>회원정보 수정</p>
      <p>작성한 글</p>
      <p>댓글</p>
      <p>보관함</p>
    </S.SideNavContainer>
  );
};
const SideNavContainer = styled.div`
  background-color: yellow;
  width: 300px;
  height: 1000px;
`;
const S = { SideNavContainer };
export default ProfileSideNav;
