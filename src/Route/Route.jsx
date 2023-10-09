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
import AllUser from "../Pages/Dashboard/all-user/AllUser";
import PendingProduct from "../Pages/Dashboard/pending-product/PendingProduct";
import Animations from "../Component/Dashboard/Animations/Animations";
import AllJewellry from "../Pages/Dashboard/AllJewellry/AllJewellry";

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
    element: <Dashboard></Dashboard>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/dashboard",
        element: <Animations></Animations>,
      },
      {
        path: "/dashboard/pending-product",
        element: <PendingProduct></PendingProduct>,
      },
      {
        path: "/dashboard/all-user",
        element: <AllUser></AllUser>,
      },
      {
        path: "/dashboard/all-jewellry",
        element: <AllJewellry></AllJewellry>,
      },
    ],
  },
]);
