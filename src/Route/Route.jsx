import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import AllJewelry from "../Pages/AllJewelry/AllJewelry";
import MyJewelry from "../Pages/MyJewelry/MyJewelry";
import AddJewelry from "../Pages/AddJewelry/AddJewelry";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-jewelry",
        element: <AllJewelry></AllJewelry>,
      },
      {
        path: "/my-jewelry",
        element: <MyJewelry></MyJewelry>,
      },
      {
        path: "/add-jewelry",
        element: <AddJewelry></AddJewelry>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>
  },
]);
