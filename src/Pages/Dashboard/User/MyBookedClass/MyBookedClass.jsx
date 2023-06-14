import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import Swal from 'sweetalert2';

const MyBookedClass = () => {
    const { user } = useContext(AuthContext);
    const [myBookedClasses, setmyBookedClasses] = useState([]);

    console.log(myBookedClasses)

    useEffect(() => {
        fetch('https://future-champions-academy-server-side.vercel.app/carts')
            .then(res => res.json())
            .then(data => {
                const myBookedActivity = data.filter(data => data.userEmail === user.email)
                setmyBookedClasses(myBookedActivity)
            })
    }, [])

    const handleDelete = myBookedClass => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://future-champions-academy-server-side.vercel.app/carts/${myBookedClass._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            fetch('https://future-champions-academy-server-side.vercel.app/carts')
                                .then(res => res.json())
                                .then(data => {
                                    const myBookedActivity = data.filter(data => data.userEmail === user.email)
                                    setmyBookedClasses(myBookedActivity)
                                })
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Price</th>
                                <th>Enrolled Students</th>
                                <th>Available Seats</th>
                                <th>Instructor</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myBookedClasses.map(myBookedClass => <tr key={myBookedClass._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={myBookedClass.image} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{myBookedClass.name}</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        ${myBookedClass.price}


                                    </td>
                                    <td>{myBookedClass.totalStudents}</td>
                                    <td>{myBookedClass.availableSeats}</td>

                                    <td>{myBookedClass.instructor}</td>
                                    <td>{myBookedClass.feedback}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs" onClick={() => handleDelete(myBookedClass)}>Delete</button>
                                    </th>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Pay</button>
                                    </th>

                                </tr>)
                            }

                        </tbody>


                    </table>
                </div>

            </div>
        </div>
    );
};

export default MyBookedClass;