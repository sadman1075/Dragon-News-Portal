import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Components/Home/Home";
import News from "../Components/News/News";
import Login from "../Components/Login/Login";
import Error from "../Components/Error/Error";
import HomeLayouts from "../Layouts/HomeLayouts";
import Registration from "../Components/Registration/Registration";
import CategoriesNews from "../Components/CategoriesNews/CategoriesNews";
import NewsDetails from "../Components/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayouts></HomeLayouts>,
        children: [
            {
                path: "",
                element: <Navigate to={"/category/01"}></Navigate>
            },
            {
                path: "/category/:id",
                element: <CategoriesNews></CategoriesNews>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)

            },
           
        ]
    },
    {
        path: "/news",
        element: <News></News>
    },
    {
        path:"/news/:id",
        element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Registration></Registration>
    },
    {
        path: "*",
        element: <Error></Error>

    }
])