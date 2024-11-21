import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Components/Layout/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/Common/Errorpage/Errorpage";
import Home from "./Components/Pages/Home/Home";
import StartLearning from "./Components/Pages/StartLearning/StartLearning";
import Tutorials from "./Components/Pages/Tutorials/Tutorials";
import Lesson from "./Components/PrivateData/Lesson/VocabularyCards";
import Login from "./Components/Forms/Login";
import AuthProvider from "./Contexts/AuthContext/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Profile from "./Components/PrivateData/Profile";
import UpdateProfile from "./Components/Forms/UpdateProfile";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import ForgotPassword from "./Components/Forms/forgotPassword";
import SignUp from "./Components/Forms/SignUp";

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
        element: (
          <PrivateRoute>
            <Tutorials></Tutorials>
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <Lesson></Lesson>
          </PrivateRoute>
        ),
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
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
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
