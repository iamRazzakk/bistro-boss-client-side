import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/useAuth/UseAuth";
import Swal from 'sweetalert2'
import useAxiox from "../../hooks/useAxiox/useAxiox";



const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item;
    const { user } = UseAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSeciout = useAxiox()
    const handleAddToCart = food => {
        // console.log(food, user.email);
        if (user && user.email) {
            // todo: send cart item to the database
            console.log(user.email);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                price,
                image
            }
            axiosSeciout.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.acknowledged) {
                        Swal.fire("Data insert in DB");
                    }
                })

        } else {
            Swal.fire({
                title: "Please login for add to cart",
                icon: "warning",
                confirmButtonColor: "#3085d6",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 mr-4 mt-4 px-4 text-white absolute right-0">{price}</p>
            <div className="card-body text-center flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 mt-4 text-white border-orange-400">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;