import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../pages/shared/Footer";
import Navbar from "../../pages/shared/navbar/Navbar";


const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('/login')
    console.log(location);
    console.log(noHeaderFooter);
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;