import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { contextProvider } from "../../Context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
    const url = useLocation().pathname;
    const { user,logout } = useContext(contextProvider)
    
    const handlelogout=()=>{
        logout()
        .then(result=>{
            toast.success("successfully Log Out")
        })
        .catch(error=>{
            toast.error(error.message)
        })
    }
    return (
        <div className="">
            <div className={`navbar ${url == "/" ? "bg-white" : "bg-base-200"}  `}>
                <div className="navbar-start">
                    
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to={"/"} className="text-lg">Home</Link></li>
                            <li><Link className="text-lg">About</Link></li>
                            <li><Link className="text-lg">Career</Link></li>

                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={"/"} className="text-lg">Home</Link></li>
                        <li><Link className="text-lg">About</Link></li>
                        <li><Link className="text-lg">Career</Link></li>
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-4 mt-4">
                    {
                        user? <div className="avatar">
                        <div className="w-12 rounded-full">
                          <img src={user.photoURL} />
                        </div>
                      </div>: <FaUser className="text-4xl"></FaUser>
                    }
                   
                    {
                        user ? <Link onClick={handlelogout} to={'/'}  className="btn bg-black text-white">Logout</Link>
                            :
                            <Link to={"/login"} className="btn bg-black text-white">Login</Link>

                    }
                </div>
            </div>
        </div>

    );
};

export default Navbar;