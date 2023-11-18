import { createBrowserRouter } from "react-router-dom";
import Main from "./main/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/menu/Menu/Menu";
import Ordar from "../pages/Ordar/Ordar/Ordar";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUP/SingUp";
import Secret from "./secret/Secret";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <Ordar></Ordar>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singUp',
                element: <SingUp></SingUp>
            },
            {
                path: '/secret',
                element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
            }
        ]
    },
]);
