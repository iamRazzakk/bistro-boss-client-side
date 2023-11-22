import { NavLink, Outlet } from "react-router-dom";
import { FaBookmark, FaCalendar, FaHome, FaRadiation, FaShoppingBag, FaShoppingCart, } from 'react-icons/fa';
import { MdMail, MdMenu } from "react-icons/md";
import useCart from "../../hooks/useCart/useCart";


const Dashboard = () => {
    const [cart] = useCart()
    const isAdmin = true
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-full bg-orange-400">
                <ul className="menu p-4">
                    <li><NavLink to={'/dashboard/userHome'}><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to={'/dashboard/cart'}><FaShoppingCart></FaShoppingCart>My Cart({cart.length})</NavLink>
                    </li>
                    <li><NavLink to={'/dashboard/reservation'}><FaCalendar></FaCalendar>Reservation</NavLink></li>
                    <li><NavLink to={'/dashboard/rating'}><FaRadiation></FaRadiation>Reservation</NavLink></li>
                    <li><NavLink to={'/dashboard/booking'}><FaBookmark></FaBookmark>Booking</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to={'/'}><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to={'/order/salad'}><MdMenu >
                    </MdMenu>Menu</NavLink></li>
                    <li><NavLink to={'/dashboard/shop'}><FaShoppingBag >
                    </FaShoppingBag>Shop</NavLink></li>
                    <li><NavLink to={'/dashboard/contact'}><MdMail >
                    </MdMail>Contact</NavLink></li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;