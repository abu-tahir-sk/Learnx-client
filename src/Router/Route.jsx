import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/Pending/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Assignments from "../pages/Assignments/Assignments";
import Register from "../pages/Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/assignments",
        element: <Assignments />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
