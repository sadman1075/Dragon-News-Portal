import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Latest from "../Components/Latest/Latest";
import LeftNavbar from "../Components/LeftNavbar/LeftNavbar";
import Navbar from "../Components/Navbar/Navbar";
import RightNavbar from "../Components/RightNavbar/RightNavbar";


const HomeLayouts = () => {
    return (
        <div className="ml-4 mr-4 lg:ml-40 lg:mr-40">
            <Header></Header>
            <div>
                <Latest></Latest>
                <Navbar></Navbar>
            </div>
            <main className="grid md:grid-cols-12 gap-3 mt-10">
                <aside className="left col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="right col-span-6 md:col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>

            <Footer></Footer>
        </div>
    );
};

export default HomeLayouts;