import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Login.css'
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [error, setError] = useState();

    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const onSubmit = data => {
        // console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error =>{ console.log(error.message)
                    setError(error.message)
            });
        reset();
    }

    const handleGoogleSignin = () =>{
        signInWithGoogle()
        .then(result =>{
            const logUser = result.user;
            console.log(logUser);
            const saveUser = { name: result.user.displayName, email: result.user.email };
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            
                        }
                    })
            navigate(from, { replace: true })
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div>
           

            <div className="hero min-h-screen bg-img" >
                <div className="hero-content flex-col lg:flex-row-reverse">

                    
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ms-10">
                        <div className="card-body">
                            <h1 className="text-4xl font-bold">Sign in </h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="Email" className="input input-bordered" {...register("email", { required:  "Email Address is required" })} required/>
                                    {errors.mail && <p role="alert">{errors.mail?.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="Password" className="input input-bordered" name='password' {...register("password",  { required: true })} required/>

                                </div>
                                <div className="form-control mt-4 mb-3">
                                    <button type="submit" className="btn bg-[#297EA6]">Login</button>
                                </div>
                            </form>
                            {/* <p className='text-[red]'>{error}</p> */}
                            <hr />
                            <p className='my-2'>New to Future Champions Academy? <span className='text-[purple]'><Link to="/signup">Create Account</Link></span> </p>
                            <p>{error}</p>
                            <div className="divider">OR</div>
                            <div className="form-control  mb-3">
                                <button className="btn bg-[#297EA6]" onClick={handleGoogleSignin}>
                                    <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" className='h-10 pe-2' />
                                    Login with Google</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;