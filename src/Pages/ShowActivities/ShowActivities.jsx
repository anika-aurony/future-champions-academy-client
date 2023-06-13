import React, { useState } from 'react';

const ShowActivities = (props) => {
    const { name, image, totalStudents, price, instructor, availableSeats
        
    } = props.activity;


// let [seatZero, setSeatZero] = useState(false);

//     if(availableSeats <= 0){
//         setSeatZero = true
//     }

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
                        <button className="btn bg-[#818cf8]" disabled={availableSeats < 1}>Book Now</button>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default ShowActivities;