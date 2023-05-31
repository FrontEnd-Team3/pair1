import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { useUserInfo } from "../../../../context/user-info";

const ProfileMain = () => {
  const [userState, setUserState] = useUserInfo();

  return (
    <ProfileContainer>
      <Container>
        <ProfileHeader>프로필 정보</ProfileHeader>
        <ProfileGrid>
          <ProfileInfoItem>
            <InfoLabel>닉네임:</InfoLabel>
            <InfoValue>{userState.username}</InfoValue>
          </ProfileInfoItem>
          <ProfileInfoItem>
            <InfoLabel>이메일:</InfoLabel>
            <InfoValue>{userState.email}</InfoValue>
          </ProfileInfoItem>
          <ProfileInfoItem>
            <InfoLabel>게시글 수:</InfoLabel>
            <InfoValue>12</InfoValue>
          </ProfileInfoItem>
          <ProfileInfoItem>
            <InfoLabel>추천 수:</InfoLabel>
            <InfoValue>123</InfoValue>
          </ProfileInfoItem>
        </ProfileGrid>
      </Container>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 300px);
  align-items: center;
  padding: 20px;
`;

const ProfileHeader = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

const ProfileInfoItem = styled.div`
  border: 1px solid #ced4da;
  border-radius: 8px;
  padding: 10px;
`;

const InfoLabel = styled.p`
  font-weight: bold;
`;

const InfoValue = styled.p`
  margin-bottom: 5px;
`;

export default ProfileMain;
