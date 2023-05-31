// 데이터를 생성하기 위해 썼던 코드

const generalData = (numberOfdata) => {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const projectData = [];
  const randomcomment = () => {
    const commentData = [];
    for (let j = 0; j < getRandomInt(5); j++) {
      commentData.push(faker.lorem.sentence());
    }
    return commentData;
  };

  for (let i = 0; i < numberOfdata; i++) {
    projectData.push({
      id: i + 1,
      writer: getRandomInt(5),
      title: faker.lorem.sentences(),
      content: faker.lorem.sentences(),
      comment: randomcomment(),
    });
  }

  return projectData;
};
