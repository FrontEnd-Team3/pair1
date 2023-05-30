import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "../main.css";
import styled from "styled-components";
import modalData from "../../../../data/modal-data.json";

const LeftModal = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    speed: 800,
    autoplay: true, // 자동 스크롤 사용 여부
    autoplaySpeed: 3000,
    slidesToScroll: 1,

    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <Container>
        <Slider {...settings}>
          {modalData.map((v) => (
            <Div>
              <img src={v.img} className="modalimg"></img>
              <div>{v.title}</div>
              <div>{v.subtitle}</div>
            </Div>
          ))}
        </Slider>
      </Container>
    </Wrapper>
  );
};

export default LeftModal;

const Div = styled.div`
  position: relative;
  height: 400px;
  top: 120px;
  z-index: 1;
  text-align: center;

  div:nth-child(2) {
    font-size: 20px;
    line-height: 50px;
  }
  div:nth-child(3) {
    font-size: 12px;
    padding-left: 70px;
    padding-right: 70px;
  }
`;
const Container = styled.div`
  position: relative;
  width: 400px;
  height: 500px;
  position: relative;
  left: 0px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
const Wrapper = styled.div``;
