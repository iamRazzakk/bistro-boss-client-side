import { useQuery } from "@tanstack/react-query";

const useCart = () => {
    const { data: cart = [] } = useQuery({
        queryKey: ["cart"],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/carts');
            const data = await response.json();
            console.log(data);
            return data; 
        }
    })
    return [cart]
};

export default useCart;