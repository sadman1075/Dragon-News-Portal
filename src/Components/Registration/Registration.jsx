import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import AuthContext, { contextProvider } from "../../Context/AuthContext";
import toast from "react-hot-toast";


const Registration = () => {
    const { createuser,updateuser } = useContext(contextProvider)
    const navigate=useNavigate()
   

    const handlecrateuser = (e) => {
        e.preventDefault();
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        const email=e.target.email.value;
        const password=e.target.password.value;

        createuser(email,password)
        .then(result=>{
            toast.success("Successfully Creating User")
            updateuser({displayName:name, photoURL:photo})
            .then(navigate("/"))
            .catch(error=>(error))
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
                        <h1 className="text-3xl lg:text-4xl font-bold">Register Your Account</h1>
                        <form className="card-body" onSubmit={handlecrateuser}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Enter your name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Enter your Photo Url" name="photo" className="input input-bordered" required />
                            </div>
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
                                    <div className="form-control">
                                        <label className="label cursor-pointer gap-4">

                                            <input type="checkbox" className="checkbox" />
                                            <span className="label-text">Accept Terms & Condition</span>
                                        </label>
                                    </div>                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-black text-white">Registration</button>
                            </div>
                            <p className="text-sm lg:text-lg">Already Have An Account? <Link className="text-red-500 font-bold" to={"/login"}>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;