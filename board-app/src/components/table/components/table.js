import { useNavigate } from "react-router-dom";

const Table = ({ posts }) => {
  const navigate = useNavigate();
  return (
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>글쓴이</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr onClick={() => navigate(`/posts/${posts.id}`)}>
            <th>{post.id}</th>
            <th>{post.title}</th>
            <th>{post.writer}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
