import React from "react"
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { useAuth } from "../contexts/AuthContext";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import ViewVotation from "../pages/View";
import CreateSurvey from "../pages/Create";


const unAuthenticadedRoutes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />
  }
]);

const authenticadedRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/survey/:id",
        element: <ViewVotation />,
      },
      {
        path: "/create",
        element: <CreateSurvey />,
      },
      {
        path: "/edit/:id",
        element: <CreateSurvey />,
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/" replace />
  }
]);

const Router: React.FC = () => {
  const {auth} = useAuth();

  return (
    <RouterProvider router={auth ? authenticadedRoutes : unAuthenticadedRoutes} />
  )
}

export default Router;