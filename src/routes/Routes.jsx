import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Signup from "../Pages/Login/Signup/Signup";
import Page404 from "../Pages/Page404/Page404";
import AllInstructors from "../Pages/AllInstructors/AllInstructors/AllInstructors";
import AllActivities from "../Pages/AllActivities/AllActivities";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";

import InstructorHome from "../Pages/Dashboard/InstructorHome/InstructorHome";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/AddClass/MyClasses/MyClasses";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses/ManageClasses";
import MAnageUsers from "../Pages/Dashboard/Admin/ManageUsers/MAnageUsers";
import SendFeedback from "../Pages/Dashboard/Admin/SendFeedback/SendFeedback";


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
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'userhome',
                element:<UserHome></UserHome>
            },
            //instructors
            {
                path: 'instructorhome',
                element: <InstructorHome></InstructorHome>
            },
            {
                path: 'addClass',
                element: <AddClass></AddClass>
            },
            {
                path: 'myClasses',
                element: <MyClasses></MyClasses>
            },
            //Admin
            {
                path: "manageClass",
                element: <ManageClasses></ManageClasses>
            },
            {
                path: "manageUsers",
                element: <MAnageUsers></MAnageUsers>
            },
            {
                path: `sendFeedback/:id`,
                element: <SendFeedback></SendFeedback>
            }
        ]
    },
    {
        path: "*",
        element: <Page404></Page404>
    }
    
  ]);



export default router;