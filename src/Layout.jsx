import { Outlet } from "react-router-dom";
import Navbar from "./page/home/nav/Navbar";
import Footer from "./page/home/footer/Footer";



const Layout = () => {
    return (
        <div>
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;