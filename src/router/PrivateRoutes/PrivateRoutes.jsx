import { useContext } from "react";
import { AuthContext } from "../../component/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        <div><progress className="progress w-56"></progress></div>
    }
    if (user) {
        return children
    }

    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoutes;