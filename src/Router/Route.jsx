import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/Pending/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Assignments from "../pages/Assignments/Assignments";
import Register from "../pages/Auth/Register";
import AddAssignments from "../pages/AddAssignments";
import MySubmitted from "../pages/My-Submitted/MySubmitted";
import Update from "../components/Update";

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
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/assignment/${params.id}`),
      },
      {
        path: "/add-assignments",
        element: <AddAssignments />,
      },
      {
        path: "/my-submitted",
        element: <MySubmitted />,
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
