import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";
import Main from "../pages/main";
import ProfileEdit from "../pages/profile/components/profile-edit";
import ProfileMain from "../pages/profile/components/profile-main";
import PostMain from "../pages/post-main";
import OnePost from "../pages/one-post";

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
        path: "/profile/",
        element: <ProfileMain />,
      },
      {
        path: "/profile/edit",
        element: <ProfileEdit />,
      },

      {
        path: "/posts",
        element: <PostMain />,
      },
      {
        path: "/posts/:postId",
        element: <OnePost />,
      },
    ],
  },
]);

/* 기본값 */
export default router;
