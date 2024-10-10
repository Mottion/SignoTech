import React from "react"
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "../pages/signup";
import Login from "../pages/login";
import { useAuth } from "../contexts/AuthContext";
import Home from "../pages/home";


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
    element: <Home />
  },
  {
    path: "/a",
    element: <>Hellow world</>
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