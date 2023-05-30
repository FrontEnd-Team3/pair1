import { useReducer, useState } from "react";
import { UseStore } from "../useContext";
import FirRecommend from "./recommend";
import SecRecommend from "./remmomend-2";
import ThrRecommend from "./recommend-3";
import styled from "styled-components";
const RecommendMain = () => {
  const [state, setState] = useState(true);
  const [state2, setState2] = useState(true);

  const reducer = (oldState, action) => {
    if (action.type === "MOVIE") {
      setState(true);
      setState2(true);
    } else if (action.type === "HEALTH") {
      setState(true);
      setState2(false);
    } else if (action.type === "CULTURE") {
      setState(false);
      setState(false);
    }
  };
  const [confirm, setDispatch] = useReducer(reducer, state);
  const handleMovie = () => {
    setDispatch({
      type: "MOVIE",
    });
  };

  const handleHealth = () => {
    setDispatch({
      type: "HEALTH",
    });
  };

  const handleCulture = () => {
    setDispatch({
      type: "CULTURE",
    });
  };

  return (
    <div>
      <Title>BRUNCH WRITERS</Title>
      <Sen>브런치 추천 작가 </Sen>
      <Button onClick={handleMovie}>영화</Button>
      <Button onClick={handleHealth}>건강</Button>
      <Button onClick={handleCulture}>인문교양</Button>
      {state && state2 && <FirRecommend />}
      {state && !state2 && <SecRecommend />}
      {!state && !state2 && <ThrRecommend />}
    </div>
  );
};

export default RecommendMain;

const Title = styled.div`
  font-family: "Nanum Myeongjo", serif;
  font-size: 18px;
  letter-spacing: 10px;
  position: relative;
  left: 740px;
  top: 80px;
`;
const Sen = styled.div`
  color: gray;
  position: relative;
  left: 840px;
  top: 90px;
  font-size: 12px;
`;
const Button = styled.button`
  width: 80px;
  height: 30px;
  position: relative;
  top: 130px;
  left: 750px;
  margin-left: 10px;
  border-radius: 20px;
  background-color: white;
  border: 1px solid gray;
  :hover {
    border: 1px solid green;
    color: green;
  }
`;
