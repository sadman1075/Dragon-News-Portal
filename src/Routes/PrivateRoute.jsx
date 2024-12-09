import {  useContext } from "react";
import { contextProvider } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader/Loader";

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(contextProvider)
    const location=useLocation()
    if (loader) {
        return <Loader></Loader>
    }

    if (user && user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to={"/login"}></Navigate>



};

export default PrivateRoute;