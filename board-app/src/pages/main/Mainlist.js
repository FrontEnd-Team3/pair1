import styled from "styled-components";
import { Link } from "react-router-dom";

const Mainlist = ({ title, content, information, IMG, ID }) => {
  return (
    <>
      <S.List>
        <div>
          <h1>{ID}</h1>
          <Link to="/profile">
            <S.H2>{title}</S.H2>
            <S.P>{content}</S.P>
            <S.Span>{information}</S.Span>
          </Link>
        </div>
        {IMG && <S.IMG src={IMG} />}
      </S.List>
    </>
  );
};
export default Mainlist;

const List = styled.li`
  margin-top: 20px;
  width: 700px;
  /* background-color: white; */
  background-color: rgb(245, 245, 245);
  height: 170px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px 20px 20px;
`;
const IMG = styled.img`
  width: 100px;
  height: 100px;
`;
const H2 = styled.h2`
  font-weight: 300;
  font-size: 22px;
`;

const P = styled.p`
  font-size: 14px;
  font-weight: 100;
  color: rgb(120, 120, 120);
`;
const Span = styled.span`
  font-size: 10px;
  font-weight: 100;
  color: rgb(90, 90, 90);
`;
const S = {
  List,
  IMG,
  H2,
  P,
  Span,
};
