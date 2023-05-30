import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { useUserInfo } from "../../../../context/user-info";

const ProfileMain = () => {
  const [userState, setUserState] = useUserInfo();

  return (
    <S.ProfileContainer>
      <Container>
        <h1>프로필 정보</h1>
        <Row>
          <Col>
            <p>닉네임: {userState.username}</p>
            <p>이메일: {userState.email}</p>
          </Col>
          <Col>
            <p>게시글 수: 12</p>
            <p>추천 수: 123</p>
          </Col>
        </Row>
      </Container>
    </S.ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 300px);
  align-items: center;
  padding: 20px;
`;

const S = { ProfileContainer };

export default ProfileMain;
