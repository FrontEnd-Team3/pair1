import Mainlist from "./Mainlist";
import styled from "styled-components";
import APPLE from "./APPLE.jpg";
import Airpot from "./에어팟 프로.jpg";
import Apartment from "./아파트.png";
import Hand from "./손잡자.jpg";
import Humanity from "./인류.jpg";
import chatGTP from "./챗GTP.png";
import { faker } from "@faker-js/faker";
import data from "../../data/data.json";

const Main = () => {
  // const list = [];
  const IMG = [chatGTP, APPLE, Airpot, Apartment, Hand, Humanity];
  const list = data.map((onePost, index) => ({ ...onePost, IMG: IMG[index] }));
  // for (let i = 0; i < 7; i++) {
  //   list.push({
  //     title: faker.lorem.words({ min: 2, max: 5 }),
  //     content: faker.lorem.sentence({ min: 20, max: 30 }),
  //     information: `댓글0 . ${faker.datatype.number(
  //       24
  //     )}시간전 by ${faker.person.fullName()}`,
  //     IMG: IMG[i],
  //     ID: i + 1,
  //   });
  // }

  return (
    <>
      <S.UL>
        {list.map((value) => {
          return (
            <Mainlist
              title={value.title}
              content={value.content}
              information={value.information}
              IMG={value.IMG}
              ID={value.ID}
            />
          );
        })}
      </S.UL>
    </>
  );
};
export default Main;

const UL = styled.ul`
  width: 700px;
  margin: 0 auto;
  list-style: none;
`;

const S = {
  UL,
};
