import { useContext } from "react";
import { AuthContext } from "../../component/AuthProvider/AuthProvider";

const UseAuth = () => {
    const auth = useContext(AuthContext)
    return auth
};

export default UseAuth;