import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Latest = () => {
    return (
        <div className="text-center md:flex justify-center items-center gap-6 p-4 bg-base-200 mt-7">
            <Link className="btn bg-red-600 text-white">Latest</Link>
            <p className="font-semibold text-md ">
                <Marquee className="space-x-10" pauseOnHover={true}>
                    <Link to={"/news"}>
                        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...

                    </Link>
                    <Link to={"/news"}>
                        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...

                    </Link>
                    <Link to={"/news"}>
                        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...

                    </Link>
                </Marquee>
            </p>
        </div>
    );
};

export default Latest;