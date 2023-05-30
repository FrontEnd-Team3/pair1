import data from "../../../../data/Main-image.json";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "../main.css";
import styled from "styled-components";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    speed: 800,
    autoplay: true, // 자동 스크롤 사용 여부
    autoplaySpeed: 4000,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };

  return (
    <div>
      <Container>
        <Slider {...settings}>
          <Div className="mint">
            <Img src="img/banner1.jpg"></Img>
          </Div>
          <Div className="green">
            <Img src="img/banner2.jpg"></Img>
          </Div>
          <Div className="blue">
            <Img src="img/banner3.jpg"></Img>
          </Div>
        </Slider>
      </Container>
    </div>
  );
};
export default Banner;

const Container = styled.div``;
const Div = styled.div`
  /* background-color: purple; */
  height: 60px;
`;

const Img = styled.img`
  position: relative;
  left: 370px;
  width: 1000px;
`;
