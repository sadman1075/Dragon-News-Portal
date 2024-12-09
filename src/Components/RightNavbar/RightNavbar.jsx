import { FaFacebook, FaGithub, FaGoogle, FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import swiming from '../../../public/assets/swimming.png';
import pic from "../../../public/assets/class.png";
import playground from "../../../public/assets/playground.png";
import bg from "../../../public/assets/bg.png"
import { useContext } from "react";
import { contextProvider } from "../../Context/AuthContext";

const RightNavbar = () => {
    const {googleLogin}=useContext(contextProvider)

const handlegooglelogin=()=>{
    googleLogin()
    .then(result=>alert("successfully log In"))
    .catch(error=>alert("Unsuccessfully Login user"))
}
    return (
        <div>
            <p className="text-lg font-bold">Login With</p>
            <div className="grid gap-4 mt-4">
                <Link onClick={handlegooglelogin} className="btn w-full bg-white text-center font-semibold text-blue-600 border-2 border-blue-500 "><FaGoogle className="text-blue-600 text-md"></FaGoogle>Login with Google</Link>
                <Link className="btn w-full bg-white text-center font-semibold border-2 border-black"><FaGithub className="text-lg"></FaGithub>Login with Github</Link>
            </div>
            <div className="mt-10">
                <p className="text-xl font-bold">Find Us On</p>
            </div>
            <div className="join join-vertical w-full mt-6 ">
                <button className="btn bg-white border-1 text-lg text-gray-400  border-gray-300 join-item justify-start"><FaFacebook className="text-blue-600"></FaFacebook>Facebook</button>
                <button className="btn bg-white border-1 text-lg text-gray-400  border-gray-300 join-item justify-start"><FaSquareTwitter className="text-blue-400"></FaSquareTwitter>Twitter</button>
                <button className="btn bg-white border-1 text-lg text-gray-400  border-gray-300 join-item justify-start"><FaInstagramSquare className="text-red-500" />Instagram</button>
            </div>
            <div className="bg-base-200 mt-8 p-3">
                <p className="text-xl font-bold mt-4 mb-6">Q-Zone</p>
                <img className="w-full" src={swiming} alt=""  />
                <img className="w-full mt-8" src={pic} alt=""  />
                <img className="w-full mt-8" src={playground} alt=""  />
            </div>
            <div className="mt-8 p-3">
                <img src={bg} alt=""  />
            </div>
        </div>
    );
};

export default RightNavbar;