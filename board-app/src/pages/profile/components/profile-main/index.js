import styled from "styled-components";
import { useUserInfo } from "../../../../context/user-info";

const ProfileMain = () => {
  const [userState, setUserState] = useUserInfo();
  return (
    <S.ProfileContainer>
      <h1>프로필 정보</h1>
      <p>닉네임: {userState.username}</p>
      <p>이메일: {userState.email}</p>
      <p>게시글 수: 12</p>
      <p>추천 수: 123</p>
    </S.ProfileContainer>
  );
};
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 300px);
  align-items: center;
`;
export default ProfileMain;
const S = { ProfileContainer };
