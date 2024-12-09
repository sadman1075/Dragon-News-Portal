import {  NavLink } from "react-router-dom";

const Category = ({category}) => {
    
    const {category_name,category_id}=category;
   
    return (
        <div>
            <ul>
                <li>
                    <NavLink to={`/category/${category_id}`} className="btn bg-white border-0">{category_name}</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Category;