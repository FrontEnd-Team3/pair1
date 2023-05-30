import styled from "styled-components";
import recommendData from "../../../../data/reccomand-data.json";

const SecRecommend = () => {
  return (
    <div>
      <Grid>
        {recommendData
          .filter((v) => v.id === "HEALTH")
          .map((value) => (
            <Wrapper>
              <Contain>
                <Image src={value.img}></Image>
                <div>{value.name}</div>
                <div>{value.word}</div>
                <div>{value.sentence}</div>
              </Contain>
            </Wrapper>
          ))}
      </Grid>
    </div>
  );
};

export default SecRecommend;

const Contain = styled.div`
  position: relative;
  top: 70px;
  div:nth-child(2) {
    font-family: "Nanum Myeongjo", serif;
    font-size: 18px;
    color: #504b4b;
  }
  div:nth-child(3) {
    font-size: 12px;
    color: #959595;
  }
  div:nth-child(4) {
    font-size: 12px;
    color: #959595;
    margin-left: 30px;
    margin-right: 30px;
  }
`;
const Wrapper = styled.div`
  position: relative;
  left: 450px;
  top: 200px;
  background-color: white;
  width: 280px;
  height: 370px;
  text-align: center;
  cursor: pointer;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: relative;
`;
const Grid = styled.div`
  display: grid;
  grid-row-gap: 13px;
  grid-column-gap: 95px;
  grid-template-columns: 200px 200px 200px;
  line-height: 40px;
`;
