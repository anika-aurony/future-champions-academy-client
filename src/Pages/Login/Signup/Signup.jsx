import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProviders';

const Signup = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext)

    const onSubmit = data =>{
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                // updateUserData(result.user, name, photo);
            })
            .catch(error => console.log(error))
        reset();
    } 

    return (
        <div>
            <div className="hero min-h-screen bg-img">
                <div className="hero-content flex-col lg:flex-row">


                    <div className="ms-4  card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ms-10">
                        <div className="card-body">
                            <h1 className="text-4xl font-bold">Create Account </h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" name="name" className="input input-bordered"  {...register("name", { required: "Name is required" })} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" 
                                    {...register("photo")} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name="email" className="input input-bordered"
                                    {...register("email", { required: "Email is required" })}  required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" name='password' {...register("password", {
                                        required: true, pattern: {
                                            value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                                            message:
                                                'Password must contain at least 6 characters, one uppercase letter, and one special character',
                                        },
                                    })} required />
                                    {errors.password && <p>{errors.password.message}</p>}
                                    
                                    
                                </div>
                              
                                <div className="form-control mt-4 mb-3">
                                    <button className="btn bg-[#297EA6]">Create</button>
                                </div>

                            </form>
                            <hr />
                            <p className='my-2'>Already have an Account? <span className='text-[purple]'><Link to="/login">Sign in</Link></span> </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Signup;