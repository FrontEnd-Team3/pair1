import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";

import Main from "../pages/main";
import Profile from "../pages/profile";
import ProfileEdit from "../pages/profile/components/profile-edit";
import ProfileMain from "../pages/profile/components/profile-main";

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
        children: [
          {
            path: "/profile/:postId",
            element: <ProfileMain />,
          },
          {
            path: "/profile/edit",
            element: <ProfileEdit />,
          },
        ],
      },
    ],
  },
]);

/* 기본값 */
export default router;
