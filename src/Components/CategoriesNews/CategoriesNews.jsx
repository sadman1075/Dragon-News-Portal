import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
import CategoryNews from "../CategoryNews/CategoryNews";

const CategoriesNews = () => {
    const loader=useLoaderData();
    const datas=loader.data;
   
    
    return (
        <div className="mt-4">
            
            {
                datas.map(data=><CategoryNews key={data._id} data={data}></CategoryNews>)
            }
        </div>
    );
};

export default CategoriesNews;