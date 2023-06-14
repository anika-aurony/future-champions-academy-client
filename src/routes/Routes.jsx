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
import AdminRoutes from "./AdminRoutes";
import InstructorRoutes from "./InstructorRoutes";
import MyBookedClass from "../Pages/Dashboard/User/MyBookedClass/MyBookedClass";
import MyEnrolledClass from "../Pages/Dashboard/User/MyEnrolledClass/MyEnrolledClass";


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
            {
                path: 'myBookedClass',
                element: <MyBookedClass></MyBookedClass>
            },
            {
                path: 'myEnrolledClass',
                element: <MyEnrolledClass></MyEnrolledClass>
            },
            //instructors
            {
                path: 'instructorhome',
                element: <InstructorRoutes><InstructorHome></InstructorHome></InstructorRoutes>
            },
            {
                path: 'addClass',
                element: <InstructorRoutes><AddClass></AddClass></InstructorRoutes>
            },
            {
                path: 'myClasses',
                element: <InstructorRoutes><MyClasses></MyClasses></InstructorRoutes>
            },
            //Admin
            {
                path: "manageClass",
                element: <AdminRoutes><ManageClasses></ManageClasses></AdminRoutes>
            },
            {
                path: "manageUsers",
                element: <AdminRoutes><MAnageUsers></MAnageUsers></AdminRoutes>
            },
            {
                path: `sendFeedback/:id`,
                element: <AdminRoutes><SendFeedback></SendFeedback></AdminRoutes>
            }
        ]
    },
    {
        path: "*",
        element: <Page404></Page404>
    }
    
  ]);



export default router;