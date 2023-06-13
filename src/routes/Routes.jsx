import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Signup from "../Pages/Login/Signup/Signup";
import Page404 from "../Pages/Page404/Page404";
import AllInstructors from "../Pages/AllInstructors/AllInstructors/AllInstructors";
import AllActivities from "../Pages/AllActivities/AllActivities";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/signup",
            element: <Signup></Signup>
        },
        {
            path: "/showInstructors",
            element: <AllInstructors></AllInstructors>
        },
        {
            path: "/allActivities",
            element: <AllActivities></AllActivities>
        },
      ]
    },
    {
        path: "*",
        element: <Page404></Page404>
      }
  ]);



export default router;