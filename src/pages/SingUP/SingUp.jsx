import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../component/AuthProvider/AuthProvider";

const SingUp = () => {
    const navigate = useNavigate()
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const { createUser, updateProfileUser } = useContext(AuthContext)
    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                updateProfileUser(data.name, data.PhotoURL)
                    .then(() => {
                        console.log("User profile updated");
                        reset()
                        toast.success("User create successfully")
                        navigate('/')
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .then(error => {
                console.log(error);
            })
    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sing up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className="text-center text-3xl font-bold">Sing Up Now</h1>
                        <div>
                            {/* for user name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" {...register('name', { required: true })} placeholder="Enter name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}

                            </div>
                            {/* for user Img */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" {...register('PhotoURL', { required: true })} placeholder="Enter photo" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">PhotoURL is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email', { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/
                                })} type="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <span className="text-red-600">Password must be 6 digit</span>}
                                {errors.firstName?.type === "minLength" && (<p className="text-red-600">Password must be 6 digit</p>
                                )}
                                {errors.password?.type === "maxLength" && (<p className="text-red-600">password must be less than 20 characters</p>
                                )}
                                {errors.password?.type === "pattern" && (<p className="text-red-600">password must have one upercase characters one lowercase characters,one number and spacial characters</p>
                                )}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sing up" />
                            </div>
                        </div>
                        <Toaster></Toaster>
                    </form>
                    <p className='text-center mb-8'><small>Already Have an Account<Link className='font-bold text-blue-600' to={'/login'}> Please Login</Link></small></p>
                </div>
            </div>
        </>
    );
};

export default SingUp;