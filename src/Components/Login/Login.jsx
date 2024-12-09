import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { contextProvider } from "../../Context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
    const {loginuser}=useContext(contextProvider)
    const location=useLocation()
    const  navigate=useNavigate()
    const handlelogin=(e)=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        loginuser(email,password)
        .then(result=>{
            
            toast.success("successfully login")
            e.target.reset()
            navigate(location?.state? location.state:"/")
        })
        .catch(error=>{
            toast.error(error.message)
        })


    }
    return (
       <div className="bg-base-200">
        <div className="">
            <Navbar></Navbar>
        </div>
         <div className="hero bg-base-200 py-10">
            
            <div className="hero-content">
                <div className="card bg-base-100 w-full px-4 py-4 lg:px-20  lg:py-6  ">
                    <h1 className="text-3xl lg:text-4xl font-bold">Login Your Account</h1>
                    <form className="card-body" onSubmit={handlelogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email address" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-black text-white">Login</button>
                        </div>
                        <p className="text-sm lg:text-lg">Don't Have An Account? <Link className="text-red-500 font-bold" to={"/register"}>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Login;