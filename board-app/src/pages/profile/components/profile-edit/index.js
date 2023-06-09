import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUserInfo } from "../../../../context/user-info";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const [userState, setUserState] = useUserInfo();

  const validate = (e) => {
    e.preventDefault();

    if (e.target.password.value === e.target.passwordConfirm.value) {
      setUserState((prev) => ({
        uid: prev.uid,
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }));
      alert("회원 정보가 변경되었습니다.");
      navigate("/profile/");
    } else {
      alert("비밀번호를 다시 확인해 주세요.");
    }
  };

  return (
    <ProfileForm onSubmit={validate}>
      <Container>
        <h1>프로필 정보</h1>
        <FormGroupRow>
          <FormCol xs={12} md={6}>
            <Form.Group controlId="formUsername">
              <Form.Label>닉네임 수정</Form.Label>
              <Form.Control
                type="text"
                name="username"
                defaultValue={userState.username}
                className="form-input"
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>비밀번호 수정</Form.Label>
              <Form.Control
                type="password"
                name="password"
                className="form-input"
              />
            </Form.Group>
          </FormCol>
          <FormCol xs={12} md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>이메일 수정</Form.Label>
              <Form.Control
                type="email"
                name="email"
                defaultValue={userState.email}
                className="form-input"
              />
            </Form.Group>
            <Form.Group controlId="formPasswordConfirm">
              <Form.Label>비밀번호 확인</Form.Label>
              <Form.Control
                type="password"
                name="passwordConfirm"
                className="form-input"
              />
            </Form.Group>
          </FormCol>
        </FormGroupRow>
        <Button variant="primary" type="submit" className="btn-primary">
          제출
        </Button>
      </Container>
    </ProfileForm>
  );
};

const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 300px);
  align-items: center;
  padding: 20px;

  h1 {
    margin-bottom: 20px;
  }

  .form-input {
    border-radius: 8px;
    padding: 10px;
    border: 1px solid #ced4da;
    margin-bottom: 10px;
    width: 100%;
  }

  .btn-primary {
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 16px;
  }
`;

const FormGroupRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const FormCol = styled(Col)`
  padding-right: 15px;
  padding-left: 15px;
`;

export default ProfileEdit;
