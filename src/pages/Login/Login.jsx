
import { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../component/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaGoogle } from 'react-icons/fa';
const Login = () => {
    const { logIn, googleSingIn } = useContext(AuthContext)
    const [disable, setDisable] = useState(true)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.form?.pathname || "/"
    console.log("state in path name", location.state);
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        // const capture = form.capture.value
        // console.log(email, password, capture);
        logIn(email, password)
            .then(result => {
                const user = result?.userCredential?.user;
                console.log(user);
                toast.success('Login successfully')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error('Login error:', error.message);
            })
    }
    const handleLoginWithGooglePopup = () => {
        googleSingIn()
            .then(result => {
                // const users = result.user
                // console.log(users);
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])
    const handleValidateCaptha = (e) => {
        const useCaptuaValue = e.target.value
        console.log(useCaptuaValue);
        if (validateCaptcha(useCaptuaValue) == true) {
            setDisable(false)
            toast.success('Captcha Matched')
        } else {
            setDisable(true)
            toast.error('Captcha Does Not Match')
        }
    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-center text-3xl font-bold">Login</h1>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                {/* for capture */}
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate></LoadCanvasTemplate>
                                    </label>
                                    <input onBlur={handleValidateCaptha} name="capture" type="text" placeholder="type the text above" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" disabled={disable} type="submit" value="Login" />
                                </div>
                            </div>
                            <Toaster></Toaster>
                        </form>
                        <p className='text-center'><small>New hear?<Link className='font-bold text-blue-600' to={'/singUp'}> Create a Account</Link></small></p>
                        <hr />
                        <div className='text-center'>
                            <button onClick={handleLoginWithGooglePopup} className="btn btn-circle btn-outline">
                                <FaGoogle></FaGoogle>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;