
import { Link } from 'react-router-dom';
import badge from '../../assets/badge.png'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-[#0ea5e9] text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[purple] rounded-box w-52">
                            <Link to="/"><li><a>Home</a></li></Link>
                            <Link to="/allToys"><li><a>Classes</a></li></Link>
                            {/* {user && <Link to="/myToy"><li><a>My Toys</a></li></Link>} */}

                            {/* {user && <Link to="/addAToy"><li><a>Add a Toy</a></li></Link>} */}
                            

                        </ul>
                    </div>
                    <img className='h-12 ms-10  ' src={badge} alt="" />
                    <a className="btn btn-ghost normal-case text-xl">

                        Future Champions Academy</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to="/"><li><a>Home</a></li></Link>
                        <Link to="/allToys"><li><a>Classes</a></li></Link>
                        <Link to="/allToys"><li><a>Instuctors</a></li></Link>
                        {/* {user && <Link to="/myToy"><li><a>My Toys</a></li></Link>} */}

                        {/* {user && <Link to="/addAToy"><li><a>Add a Toy</a></li></Link>} */}
                        


                    </ul>
                </div>
                <div className="navbar-end">
                    {/* {user && <p className='text-white pt-2 me-3 ' data-toggle="tooltip" data-placement="right" title={user?.displayName}> <img src={user?.photoURL
                    } alt="" style={{ height: '40px', borderRadius: '50%', width: '40px' }} /> </p>} */}



                    {/* {
                        user ? <button className="btn bg-[purple] me-10" onClick={handleLogOut}>Log out</button>
                            :
                            <Link to="/login"><a className="btn bg-[purple] me-10" >Login</a></Link>
                    } */}

                </div>
            </div>

        </div>
    );
};

export default Header;