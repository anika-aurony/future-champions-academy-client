import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import { Rotate, Zoom} from "react-awesome-reveal";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaCartPlus, FaBook, FaUsers, FaGolfBall } from 'react-icons/fa';

const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] =useInstructor();
    // const isAdmin = true;
    // const isInstructor = false;
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>

                            
                            <Zoom><li><NavLink to="/dashboard/manageClass">  Manage Classes <FaGolfBall></FaGolfBall> </NavLink></li></Zoom>
                            <Zoom><li><NavLink to="/dashboard/manageUsers"> Manage Users <FaUsers></FaUsers> </NavLink></li></Zoom>


                        </> : isInstructor ? <>
                            <Zoom><li><NavLink to="/dashboard/instructorhome"> Instructor Home <FaHome></FaHome></NavLink></li></Zoom>
                            <Zoom><li><NavLink to="/dashboard/addClass">  Add a class <FaBook></FaBook></NavLink></li></Zoom>
                            <Zoom><li><NavLink to="/dashboard/myclasses"> My Classes <FaBook></FaBook></NavLink></li></Zoom>

                        </> :

                            <>
                                <Zoom><li><NavLink to="/dashboard/userhome"> User Home <FaHome></FaHome></NavLink></li></Zoom>
                                <Zoom><li><NavLink to="/dashboard/myBookedClass"> My Selected Classes <FaCartPlus></FaCartPlus></NavLink></li></Zoom>
                                <Zoom><li><NavLink to="/dashboard/myEnrolledClass"> My Enrolled Classes <FaBook></FaBook></NavLink></li></Zoom>
                                
                            </>
                    }
                    <div className="divider"></div>
                    
                    <Zoom><li><NavLink to="/">Back to Home <FaHome></FaHome></NavLink> </li></Zoom>
                    <Zoom><li><NavLink to="/AllActivities">All Classes <FaBook></FaBook></NavLink> </li></Zoom>
                    <Zoom><li><NavLink to="/showInstructors">All Instructors <FaUsers></FaUsers></NavLink> </li></Zoom>
                </ul>

            </div>
        </div>

    );
};

export default Dashboard;

