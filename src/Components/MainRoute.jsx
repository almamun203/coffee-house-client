import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const MainRoute = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
};

export default MainRoute;