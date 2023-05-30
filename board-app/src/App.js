import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routing";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

/*
(1) 페이지네이션을 구현할 것

(2) 전역상태관리를 활용할 것, 라이브러리를 사용하지 않고 reducer와 context만을 사용할 것

(3) faker.js를 활용하여 직접 mock_data를 만들어볼 것, 이전 플로우 자료에 참조했던 데이터가 아닌 document를 활용하여 작성할 것, 충분히 해당 라이브러리를 활용할 수 있다면 주제는 반드시 게시판이 아니어도 괜찮음

(4) 이미지 캐루셀을 통한 목데이터 이미지의 슬라이드를 구현할 것

(5) 게시글은 추가가 가능하며 작성한 본인만 수정 및 삭제 가능, 댓글도 마찬가지

(6) 이 모든 데이터는 인스타그램이나 페이스북과 같이 하나의 페이지로 이루어져있음 
ex) 게시판 목록 → 상세 (x), 게시판 목록, 상세 → 1페이지

(7) 관심사 분리와, DI에 대해 조사하고 이를 실행하기 위해 해당 프로젝트에서 어떤 노력을 했는지 README.md에 작성할 것

(8) 디자인 까지는 아니지만 토이 프로젝트로서 어느 정도의 UI, UX는 신경쓸 수 있도록 할 것
*/
