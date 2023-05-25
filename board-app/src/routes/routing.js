import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";

import Main from "../pages/main";
import Profile from "../pages/profile";

// export const router = createBrowserRouter([])
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

/* 기본값 */
export default router;
