import { MdDelete } from "react-icons/md";
import useCart from "../../../hooks/useCart/useCart";
import Swal from "sweetalert2";
import useAxiox from "../../../hooks/useAxiox/useAxiox";


const Cart = () => {
    const [cart] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSeciour = useAxiox()
    const handleDelete = id => {
        axiosSeciour.delete(`carts/${id}`)
            .then(res => {
                console.log(res);
            })
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });
    }
    return (
        <div>
            <div className="flex justify-between">
                <h2 className="text-4xl">Total Order:{cart.length}</h2>
                <h2 className="text-4xl">Price:${totalPrice}</h2>
                <button className="btn btn-outline">Pay</button>
            </div>
            {/* for table */}
            <div className="overflow-x-auto ">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, index) =>
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <img className="h-10 w-10 rounded" src={item.image} alt="" />
                                    {/* <td>{item.email}</td> */}
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-lg btn-ghost"><td><MdDelete className="text-red-500 text-2xl"></MdDelete></td></button>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;