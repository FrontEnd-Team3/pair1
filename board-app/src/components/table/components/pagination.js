const PagesPerSection = 10;

const Pagination = ({ length }) => {
  const pageSegmented = (() => {
    const result = [];
    const range = Array.from({ length }, (_, i) => i + 1);
    while (range.length) {
      result.push(range.splice(0, 10));
    }
  })();
  
  return <></>;
};

export default Pagination;
