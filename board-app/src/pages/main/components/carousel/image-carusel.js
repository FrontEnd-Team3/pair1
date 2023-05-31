import data from "../../../../data/Main-image.json";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "../main.css";
import styled from "styled-components";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

const MainImage = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 450,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <div className="container">
      <Slider {...settings}>
        {data.map((v) => (
          <div className="card">
            <img src={v.id} className="img"></img>
            <Div>{v.word}</Div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainImage;

const Div = styled.div`
  font-family: "Nanum Myeongjo", serif;
  position: relative;
  bottom: 320px;
  font-size: 25px;
  line-height: 50px;
  text-align: center;
  color: white;
  opacity: 0.8;
  margin-left: 13px;
  margin-right: 13px;
`;
