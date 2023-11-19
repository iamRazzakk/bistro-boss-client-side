import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../component/AuthProvider/AuthProvider";

const SingUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const { createUser } = useContext(AuthContext)
    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" {...register('name', { required: true })} placeholder="Enter name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}

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