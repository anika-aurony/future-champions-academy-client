import React, { useContext, useState } from 'react';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProviders';
import {  useLocation, useNavigate } from 'react-router-dom';

const ShowActivities = (props) => {
    const { name, image, totalStudents, price, instructor, availableSeats} = props.activity;
    const {user} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [isAdmin] = useAdmin();
    const [isInstructor] =useInstructor();
    const from = '/login'
    const handleCart = (data, user, path) =>{
        const info = {...data, userName: user.displayName, userEmail: user.email }
        console.log(info);
      
        if(user == null){
            navigate(path, { replace: true })
        }

        fetch('https://future-champions-academy-server-side.vercel.app/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Class Booked',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
              

            })
    }



    return (
        
        <div className='mb-12'>
            <div className={`card card-side ${availableSeats < 1 ? 'bg-red-600' : 'bg-rose-100'}  shadow-xl me-8`}>
                <figure><img src={image} alt="Class" className='h-[180px] ps-5 ' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Fees: ${price}/session <br />
                    Total Students: {totalStudents}</p>
                    <p><b>Instructor: </b>{instructor}</p>
                    <p><b>Available Seats: </b>{availableSeats}</p>
                    <div className="card-actions">
                        <button className="btn bg-[#818cf8]" disabled={availableSeats < 1 || isAdmin || isInstructor} onClick={()=>handleCart(props.activity, user, from)}>Book Now</button>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default ShowActivities;