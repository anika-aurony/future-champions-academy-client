import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const [allClasses, setAllClasses] = useState([]);

    console.log(allClasses)

    useEffect(() => {
        fetch('http://localhost:5000/activities')
            .then(res => res.json())
            .then(data => setAllClasses(data))
    }, [])

    const handleStatus = (id, status) => {
        console.log(id, status)
        const updateStatus = { status: status }
        fetch(`http://localhost:5000/activities/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStatus)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Status updated',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    fetch('http://localhost:5000/activities')
                        .then(res => res.json())
                        .then(data => setAllClasses(data))

                }

            })
    }

    
    return (
        <div>
            <h1>Manage Classes</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Price</th>
                            <th>Enrolled Students</th>
                            <th>Available Seats</th>
                            <th>Status</th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allClasses.map(allClass => <tr key={allClass._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={allClass.image} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{allClass.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    ${allClass.price}


                                </td>
                                <td>{allClass.totalStudents}</td>
                                <td>{allClass.availableSeats}</td>

                                <td>{allClass.status}</td>
                                <td></td>
                                <th>
                                    <button onClick={() => handleStatus(allClass._id, 'approved')} className="btn btn-ghost btn-xs" disabled={allClass.status == 'approved' || allClass.status == 'denied'}>Approved</button>

                                    <button onClick={() => handleStatus(allClass._id, 'denied')} className="btn btn-ghost btn-xs" disabled={allClass.status == 'approved' || allClass.status == 'denied'}>Deny</button>

                                    <button className="btn btn-ghost btn-xs"><Link to={`/dashboard/sendFeedback/${allClass._id}`}>Send Feedback</Link></button>
                                    
                                </th>

                            </tr>)
                        }




                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageClasses;