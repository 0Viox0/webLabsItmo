import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Gradient from "../gradients/Gradient";
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <Gradient />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
