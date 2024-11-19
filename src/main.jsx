import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Components/Layout/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/Common/Errorpage/Errorpage";
import Home from "./Components/Pages/Home/Home";
import StartLearning from "./Components/Pages/StartLearning/StartLearning";
import Tutorials from "./Components/Pages/Tutorials/Tutorials";
import Lesson from "./Components/Pages/Lesson/VocabularyCards";
import Login from "./Components/Forms/Login";
import SignUp from "./Components/Forms/SignUP";
import AuthProvider from "./Contexts/AuthContext/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Profile from "./Components/PrivateData/Profile";
import UpdateProfile from "./Components/Forms/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/start-learning",
        element: <StartLearning></StartLearning>,
      },
      {
        path: "/tutorials",
        element: <Tutorials></Tutorials>,
      },
      {
        path: "/lesson/:lesson_id",
        loader: async ({ params }) => {
          const response = await fetch(
            `/Data/Lesson/Lesson${params.lesson_id}.json`
          );
          const lesson = await response.json();
          return lesson || null;
        },
        element: <Lesson></Lesson>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
