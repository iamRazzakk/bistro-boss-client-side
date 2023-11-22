import { useQuery } from "@tanstack/react-query";
import useAxiox from "../../../hooks/useAxiox/useAxiox";
import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";


const Allusers = () => {
    const axiousSeciour = useAxiox()
    const { data: users = [] } = useQuery({

        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiousSeciour.get('/users')
            return res.data
        }
    })
    console.log(users);
    const handleClickDelete = user => {

    }
    return (
        <div>
            <div className="flex justify-evenly">
                <h1 className="text-3xl">All users</h1>
                <h1 className="text-3xl">Total users:{users.length}</h1>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* row 1 */}
                            {
                                users.map((user, index) => (
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user?.name}</td>
                                        <td>{user?.email}</td>
                                        <td>
                                            {/* TODO: update btn */}
                                            <button className="btn btn-lg bg-orange-500 btn-ghost"><td><FaUsers className="text-white text-2xl"></FaUsers></td></button>
                                        </td>
                                        <td>
                                            {/*  TODO: Delete btn*/}
                                            <button
                                                onClick={() => handleClickDelete(user)}
                                                className="btn btn-lg btn-ghost"><td><MdDelete className="text-red-600 text-2xl"></MdDelete></td></button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Allusers;