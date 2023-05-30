import { useContext } from "react";
import styled from "styled-components";
import { UseStore } from "../useContext";

const RightModal = () => {
  const { confirm, setConfirm, ref } = useContext(UseStore);

  const handleClose = () => {
    setConfirm(false);
    ref.current.style.filter = "brightness(100%)";
  };
  return (
    <Wrapper>
      <Close onClick={handleClose}>x</Close>
      <Title>브런치스토리 시작하기</Title>
      <Login>카카오계정으로 로그인</Login>
      <Hr />
      <Find>내 브런치스토리 찾기</Find>
      <Forget>내 브런치스토리의 카카오계정을 모르겠어요</Forget>
      <Other>페이스북, 트위터로만 로그인 했었나요?</Other>
      <Help>로그인 관련 상세 도움말</Help>
    </Wrapper>
  );
};
export default RightModal;
const Close = styled.button`
  position: relative;
  top: 10px;
  left: 370px;
  border: none;
  background-color: #f8f8f8;
  font-size: 17px;
`;
const Help = styled.div`
  position: relative;
  top: 230px;
  left: 130px;
  font-size: 12px;
  text-decoration-line: underline;
`;
const Other = styled.button`
  position: relative;
  top: 150px;
  left: 30px;
  padding: 15px 49px;
  background-color: white;
  border: none;
  border-radius: 5px;
`;
const Forget = styled.button`
  position: relative;
  top: 135px;
  left: 30px;
  padding: 15px 34px;
  background-color: white;
  border: none;
  border-radius: 5px;
`;

const Find = styled.div`
  position: relative;
  font-size: 13px;
  left: 30px;
  top: 120px;
`;
const Hr = styled.hr`
  position: relative;
  top: 90px;
  right: 0px;
  width: 340px;
  color: gray;
`;
const Login = styled.button`
  position: relative;
  left: 30px;
  top: 60px;
  padding: 13px 100px;
  background-color: #ffe500;
  border: none;
  border-radius: 5px;
  font-weight: bold;
`;

const Title = styled.div`
  position: relative;
  left: 30px;
  top: 50px;
`;

const Wrapper = styled.div`
  width: 400px;
  height: 500px;
  position: relative;
  bottom: 501px;
  left: 400px;
  background-color: #f8f8f8;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;
