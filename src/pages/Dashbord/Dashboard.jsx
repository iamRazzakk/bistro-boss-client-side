import { NavLink, Outlet } from "react-router-dom";
import {  FaBook, FaCalendar, FaHome, FaList, FaRadiation, FaShoppingBag, FaShoppingCart, FaUser, FaUsers, FaUtensils, } from 'react-icons/fa';
import { MdMail, MdMenu } from "react-icons/md";
import useCart from "../../hooks/useCart/useCart";


const Dashboard = () => {
    const [cart] = useCart()
    const isAdmin = true
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-full bg-orange-400">
                {
                    isAdmin ? <>
                        <ul className="menu p-4">
                            <li><NavLink to={'/dashboard/adminHome'}><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to={'/dashboard/addItems'}><FaUtensils></FaUtensils>Add Items</NavLink></li>
                            {/* <li><NavLink to={'/dashboard/cart'}><FaShoppingCart></FaShoppingCart>My Cart({cart.length})</NavLink>
                    </li> */}
                            <li><NavLink to={'/dashboard/cart'}><FaList></FaList>Menage items</NavLink>
                            </li>
                            <li><NavLink to={'/dashboard/bookings'}><FaBook></FaBook>Menage Booking</NavLink></li>
                            <li><NavLink to={'/dashboard/allusers'}><FaUsers></FaUsers>All Users</NavLink></li>
                            <div className="divider"></div>
                        </ul>
                    </> :
                        <>
                        </>
                }



                {/* 
                // <li><NavLink to={'/dashboard/rating'}><FaRadiation></FaRadiation>Reservation</NavLink></li>

                // <div className="divider"></div>
                // <li><NavLink to={'/'}><FaHome></FaHome>Home</NavLink></li>
                // <li><NavLink to={'/order/salad'}><MdMenu >
                // </MdMenu>Menu</NavLink></li>
                // <li><NavLink to={'/dashboard/shop'}><FaShoppingBag >
                // </FaShoppingBag>Shop</NavLink></li>
                // <li><NavLink to={'/dashboard/contact'}><MdMail >
                // </MdMail>Contact</NavLink></li>
            // </ul> */}
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div >
    );
};

export default Dashboard;