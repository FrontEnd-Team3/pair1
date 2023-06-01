import styled from "styled-components";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import APPLE from "../../pages/post-main/APPLE.jpg";
import Airpot from "../../pages/post-main/에어팟 프로.jpg";
import Apartment from "../../pages/post-main/아파트.png";
import "./index.css";
import Hand from "../../pages/post-main/손잡자.jpg";
import Humanity from "../../pages/post-main/인류.jpg";
import chatGTP from "../../pages/post-main/챗GTP.png";
import { faker } from "@faker-js/faker";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";

const OnePost = () => {
  const [color, setcolor] = useState(true);

  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const { postId } = useParams();
  console.log(postId);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") return;
    setList([...list, inputValue]);
    setInputValue("");
  };
  const handleChange = (e) => {
    setInputValue(e.target.value); // 입력 값 업데이트
  };
  const handleDelete = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  return (
    <S.DIV>
      <S.TITLE>제목 : {data[postId - 1].title}</S.TITLE>
      <S.Container className="container">
        <Carousel className="banner">
          <Carousel.Item interval={1000}>
            <img className="banner-image" src={APPLE} alt="First slide" />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="banner-image" src={Airpot} alt="Second slide" />
            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img className="banner-image" src={Apartment} alt="Third slide" />
            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img className="banner-image" src={Hand} alt="Third slide" />
            {/* <Carousel.Caption>
              <h3>Fourth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img className="banner-image" src={Humanity} alt="Third slide" />
            {/* <Carousel.Caption>
              <h3>Fifth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img className="banner-image" src={chatGTP} alt="Third slide" />
            {/* <Carousel.Caption>
              <h3>Sixth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </S.Container>
      <S.content>{data[postId - 1].content}</S.content>

      <BookmarkBorderIcon
        style={color ? { color: "" } : { color: "pink" }}
        onClick={() => setcolor(!color)}
        className="icon"
      />
      <form className="chat" onSubmit={handleSubmit}>
        <h3>댓글창 입니다~!</h3>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">댓글 추가하기</button>
      </form>
      <ul>
        <li>
          사용자1: 예시1
          <button onClick={(e) => e.target.parentNode.remove()}>삭제</button>
        </li>
        <li>
          사용자1: 예시2
          <button onClick={(e) => e.target.parentNode.remove()}>삭제</button>
        </li>
        {list.map((item, index) => (
          <li key={index}>
            사용자1 : {item}
            <button onClick={() => handleDelete(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </S.DIV>
  );
};

export default OnePost;

const DIV = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Container = styled.div`
  display: flex;
`;
const TITLE = styled.h1`
  text-align: center;
`;
const content = styled.p`
  text-align: center;
`;
const S = {
  DIV,
  Container,
  TITLE,
  content,
};
// bootstrap 검색 : carousel
