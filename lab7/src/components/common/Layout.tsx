import { Outlet } from "react-router-dom";
import Gradient from "./Gradient";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <>
            <Gradient />
            <Navbar />
            <Outlet />
        </>
    );
};

export default Layout;
