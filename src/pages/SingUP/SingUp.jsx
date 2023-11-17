import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const SingUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
    // console.log(watch, "Hello i'm watching you");
    // const handleSingUp = e => {
    //     e.preventDefault()
    //     const form = e.target
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value
    //     console.log(name, email, password);
    // }
    return (
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
                            <input {...register('password', { required: true })} type="password" placeholder="password" className="input input-bordered" />
                            {errors.password && <span className="text-red-600">Password is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </div>
                    <Toaster></Toaster>
                </form>
                <p className='text-center'><small>Already Have an Account<Link className='font-bold text-blue-600' to={'/login'}> Please Login</Link></small></p>
            </div>
        </div>
    );
};

export default SingUp;