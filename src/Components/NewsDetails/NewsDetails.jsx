import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import RightNavbar from '../RightNavbar/RightNavbar';
import { FaArrowLeft } from 'react-icons/fa';

const NewsDetails = () => {
    const data = useLoaderData();
    const info = data.data[0];
  
    const { author, details, image_url, others_info, rating, thumbnail_url, title, total_view } = info
    return (
        <div className='ml-4 mr-4 lg:ml-40 lg:mr-40'>
            <div>
                <Header></Header>
            </div>

            <div className='grid md:grid-cols-12 gap-10 mt-10'>


                <div className='col-span-9'>
                    <p className='text-lg font-bold mb-4'>Dragon News</p>
                    <div className="card card-compact bg-white w-full border-2">
                        <figure>
                            <img
                                src={image_url}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                            <div className="card-actions justify-start mt-4">
                                <Link to={-1} className="btn bg-red-500 text-white"><FaArrowLeft className='text-white' />
                                    All News In this category</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-9 md:col-span-3'>
                    <RightNavbar></RightNavbar>
                </div>

            </div>
        </div>
    );
};

export default NewsDetails;