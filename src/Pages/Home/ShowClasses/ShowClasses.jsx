import React from 'react';

const ShowClasses = (props) => {
    console.log(props.popularClass)
    const { name, image, totalStudents, price } = props.popularClass;
    return (
        <div className='mb-8'>
            
            <div className="card card-side bg-rose-100 shadow-xl me-12">
                <figure><img src={image} alt="Class" className='h-[190px] ' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Fees: ${price}/session <br />
                    Total Students: {totalStudents}</p>
                    
                </div>
            </div>

        </div>
    );
};

export default ShowClasses;