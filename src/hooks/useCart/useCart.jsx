import { useQuery } from "@tanstack/react-query";
import UseAuth from "../useAuth/UseAuth";

const useCart = () => {
    const { user } = UseAuth()
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/carts?email=${user.email}`);
            // `http://localhost:5000/carts?email=${user.email}`
            const data = await response.json();
            console.log(data);
            return data;
        }
    })
    return [cart, refetch]
};

export default useCart;