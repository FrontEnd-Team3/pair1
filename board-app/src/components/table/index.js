import Pagination from "./components/pagination";
import Table from "./components/table";

const POSTS_PER_PAGE = 10;

const Table = ({ posts }) => {
  const postSegmented = (() => {
    const result = [];
    while (posts.length) {
      result.push(posts.splice(0, 10));
    }
  })();
  const [paginationPage, setPaginationPage] = useState(1);
  
  return (
    <>
      <Table posts={postSegmented[paginationPage - 1]} />
      <Pagination length={postSegmented.length} />
    </>
  );
};
export default Table;
