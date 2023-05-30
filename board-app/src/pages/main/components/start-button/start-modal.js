import styled from "styled-components";
import LeftModal from "./left-modal";
import RightModal from "./right-modal";

const StartModal = () => {
  return (
    <ModalContainer>
      {/** left wrapper */}
      <LeftModal />
      {/** right wrapper */}
      <RightModal />
    </ModalContainer>
  );
};

export default StartModal;

const ModalContainer = styled.div`
  border-radius: 20px;
  width: 800px;
  height: 500px;
  position: relative;
  left: 470px;
  bottom: 2700px;
  z-index: 900;
  background-color: white;
`;
