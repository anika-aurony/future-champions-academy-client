import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';

const AddClass = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext);
    
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/activities', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy information Updated',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                // form.reset();

            })
    
    };
    return (
        <div>
            <h1 className='text-center text-3xl mb-4 '>Add a Class</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='grid grid-cols-1  md:grid-cols-2'>
                    <div className="form-control w-full mb-4 ">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name</span>
                        </label>
                        <input type="text" placeholder="Class Name"
                            {...register("name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full mb-4 ms-10">
                        <label className="label">
                            <span className="label-text font-semibold">Class Image</span>
                        </label>
                        <input type="text" placeholder="Class Image"
                            {...register("image", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName}
                            {...register("instructor", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full mb-4 ms-10">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email}
                            {...register("instructorEmail", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seats</span>
                        </label>
                        <input type="number" placeholder='Available Seats'
                            {...register("availableSeat", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full mb-4 ms-10">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input type="number" placeholder='price'
                            {...register("price", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Status</span>
                        </label>
                        <input type="text" defaultValue='pending'
                            {...register("status", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full mb-4 ms-10">
                        <label className="label">
                            <span className="label-text font-semibold">Enrolled Students</span>
                        </label>
                        <input type="number" defaultValue='0'
                            {...register("totalStudents", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className='text-center'>
                    <input className="btn btn-wide btn-primary mt-4 " type="submit" value="Add Class" />
                </div>
            </form>

        </div>
    );
};

export default AddClass;