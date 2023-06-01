import styled from "styled-components";
import ContentList from "./components/keyword/list";
import MainImage from "./components/carousel/image-carusel";
import RecommendMain from "./components/recommand/recommend-main";
import { useRef, useState } from "react";
import { UseStore } from "./components/useContext";
import Banner from "./components/header/header-banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../main/components/main.css";
import StartModal from "./components/start-button/start-modal";

const Main = () => {
  const [confirm, setConfirm] = useState(false);
  const ref = useRef();

  const handleShow = () => {
    setConfirm(!confirm);
    ref.current.style.filter = "brightness(70%)";
  };

  return (
    <>
      <UseStore.Provider value={{ confirm, setConfirm, ref }}>
        <Container ref={ref}>
          <Banner />
          <Fixbar>
            <Menu src="img/munu-bar.png"></Menu>
            <Logo src="img/logo.png"></Logo>
            <Start onClick={handleShow}>시작하기</Start>
            <FontAwesomeIcon
              className="icon"
              size="1x"
              icon={faMagnifyingGlass}
            />
          </Fixbar>
          <TitleWrapper>
            <H1>
              작품이 되는 이야기, 브런치 스토리
              <Img src="img/title_logo_1.png"></Img>
            </H1>
            <H2>브런치스토리에 담긴 아름다운 작품을 감상해 보세요</H2>
            <H2>그리고 다시 꺼내 보세요.</H2>
            <H22>서랍 속 간직하고 있는 글과 감성을.</H22>
          </TitleWrapper>
          <MainImage />
          <Subtitle>BRUNCH KEYWORD</Subtitle>
          <Sen>키워드로 분류된 다양한 글모음 </Sen>
          <ContentList />
          <RecommendWrapper>
            <RecommendMain />
          </RecommendWrapper>
        </Container>

        {confirm && <StartModal />}
      </UseStore.Provider>
    </>
  );
};
export default Main;

const Start = styled.button`
  position: relative;
  left: 1230px;
  bottom: 110px;
  background-color: white;
  border: 1px solid #c2c2c2;
  border-radius: 20px;
  height: 30px;
  font-size: 12px;
  padding: 2px 8px 2px 8px;
  color: #595959;
`;

const Fixbar = styled.div`
  width: 100%;
  position: fixed;
  height: 60px;
  z-index: 1;
`;

const RecommendWrapper = styled.div`
  width: 100%;
  height: 1100px;
  background-color: #fafafa;
  position: relative;
  top: 350px;
`;
const Sen = styled.div`
  color: gray;
  position: relative;
  left: 800px;
  top: 130px;
  font-size: 12px;
`;
const Container = styled.div`
  overflow: hidden;
  height: 3000px;
  background-color: white;
`;
const Subtitle = styled.div`
  font-family: "Nanum Myeongjo", serif;
  font-size: 18px;
  letter-spacing: 10px;
  position: relative;
  left: 740px;
  top: 120px;
`;
const Img = styled.img`
  width: 55px;
  position: relative;
  top: 5px;
  right: 5px;
`;
const Menu = styled.img`
  width: 24px;
  height: 29px;
  position: relative;
  bottom: 100px;
  left: 40px;
`;

const Logo = styled.img`
  width: 300px;
  position: relative;
  right: 35px;
  bottom: 35px;
`;

const TitleWrapper = styled.div`
  width: 800px;
  height: 200px;
  margin: 0 auto;
  position: relative;
  top: 45px;
  right: 40px;
`;
const H1 = styled.h1`
  font-family: "Nanum Myeongjo", serif;
  font-size: 40px;
  /* line-height: 25px; */
`;

const H2 = styled.h2`
  font-family: "Nanum Myeongjo", serif;
  font-size: 35px;
  color: #dcdcdc;
  /* line-height: 20px; */
`;

const H22 = styled.h2`
  font-family: "Nanum Myeongjo", serif;
  font-size: 35px;
  color: #e2e2e2;
  /* line-height: 17px; */
`;
