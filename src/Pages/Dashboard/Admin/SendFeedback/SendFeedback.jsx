import React from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const SendFeedback = () => {
    const params = useParams()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const updateFeedback = { feedback: data.feedback }
        fetch(`http://localhost:5000/activities/${params.id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateFeedback)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Feedback sent',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }

            })
    
    };

    return (
        <div className='text-center'>
            <h1 className='text-3xl mb-10'>Send Feedback</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <textarea rows={5}
                    cols={50} {...register("feedback", { required: true })} className='border-2' />

                <br />
                <input className='btn btn-primary mt-10' type="submit" />
            </form>
        </div>
    );
};

export default SendFeedback;