import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

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

                            
                            <li><NavLink to="/dashboard/manageClass">  Manage Classes</NavLink></li>
                            <li><NavLink to="/dashboard/manageUsers"> Manage Users </NavLink></li>


                        </> : isInstructor ? <>
                            <li><NavLink to="/dashboard/instructorhome"> Instructor Home</NavLink></li>
                            <li><NavLink to="/dashboard/addClass">  Add a class</NavLink></li>
                            <li><NavLink to="/dashboard/myclasses"> My Classes</NavLink></li>

                        </> :

                            <>
                                <li><NavLink to="/dashboard/userhome"> User Home</NavLink></li>
                                <li><NavLink to="/"> Reservations</NavLink></li>
                                <li><NavLink to="/"> Payment History</NavLink></li>
                                <li>
                                    <NavLink to="/dashboard/mycart"> My Cart

                                    </NavLink>

                                </li>
                            </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/">Back to Home</NavLink> </li>
                    <li><NavLink to="/AllActivities">All Classes</NavLink> </li>
                    <li><NavLink to="/showInstructors">All Instructors</NavLink> </li>
                </ul>

            </div>
        </div>

    );
};

export default Dashboard;

