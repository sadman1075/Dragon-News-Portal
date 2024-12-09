import { useEffect, useState } from "react";
import Category from "../Category/Category";

const LeftNavbar = () => {
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])
    return (
        <div>
            <p className="font-semibold text-lg">All Category</p>
            <div className="grid gap-0 mt-4">
                {
                    categories.map(category=><Category key={category.category_id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;