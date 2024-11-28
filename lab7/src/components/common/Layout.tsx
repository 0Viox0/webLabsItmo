import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Gradient from "../gradients/Gradient";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="flex min-h-[100vh] flex-col relative overflow-hidden">
            <Gradient />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
