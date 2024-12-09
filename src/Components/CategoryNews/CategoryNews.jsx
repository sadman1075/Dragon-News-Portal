import { CiBookmark } from "react-icons/ci";
import { FaEye, FaShareAlt } from "react-icons/fa";
import star from "../../../public/assets/star.png"
import { Link } from "react-router-dom";

const CategoryNews = ({ data }) => {
    const { author, details, image_url, others_info, rating, thumbnail_url, title, total_view, _id } = data
    return (
        <div className="mb-8">
            <div className="card bg-white w-full md:w-11/12 shadow-xl">
                <div className="flex justify-between items-center p-4 bg-base-200">
                    <div className="flex gap-4">
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src={thumbnail_url} className="w-full" />
                            </div>
                        </div>
                        <div>
                            <p className="font-bold">{author.name || "Not Found"}</p>
                            <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <CiBookmark className="text-xl"></CiBookmark>
                        <FaShareAlt className="text-xl"></FaShareAlt>
                    </div>
                </div>
                <div className="mt-6">
                    <p className="p-3 font-bold text-lg">{title}</p>

                </div>
                <figure className="mt-4">
                    <img
                        src={image_url}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <p className="text-justify">{details.slice(0,220)} ... <Link to={`/news/${_id}`} className="text-orange-500 font-bold">Read More</Link></p>
                    <div className="divider"></div>
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <p className="ml-2">{rating.number}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaEye className="text-xl" />
                            <p>{total_view}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryNews;