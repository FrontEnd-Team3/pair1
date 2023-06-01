import styled from "styled-components";
import data from "../../../../data/list-data.json";
const ContentList = () => {
  return (
    <>
      <ListWrapper>
        {data.map((v) => (
          <div>
            <Div>{v.first}</Div>
            <Div>{v.two}</Div>
            <Div>{v.three}</Div>
          </div>
        ))}
      </ListWrapper>
    </>
  );
};
export default ContentList;

const ListWrapper = styled.div`
  width: 800px;
  height: 300px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  position: relative;
  right: 47px;
  top: 210px;
`;

const Div = styled.div`
  border: 1px solid #eeeeee;
  height: 70px;
  width: 120px;
  text-align: center;
  font-size: 12px;
  padding-top: 50px;
  color: #737272;
  box-sizing: content-box;
  :hover {
    border: 1px solid #2fa599;
    color: #12887a;
    font-weight: bold;
  }
`;
