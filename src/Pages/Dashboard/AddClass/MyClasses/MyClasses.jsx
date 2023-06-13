import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';

const MyClasses = () => {
    const { user } = useContext(AuthContext);
    const [myClasses, setmyClasses] = useState([]);

    console.log(myClasses)

    useEffect(() => {
        fetch('http://localhost:5000/activities')
            .then(res => res.json())
            .then(data => {
                const myActivity = data.filter(data => data.instructorEmail === user.email)
                setmyClasses(myActivity)
            })
    }, [])
    return (
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
                            <th>Status</th>
                            <th>Feedback</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClasses.map(myClass => <tr key={myClass._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={myClass.image} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{myClass.name}</div>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    ${myClass.price}
                               
                                  
                                </td>
                                <td>{myClass.totalStudents}</td>
                                <td>{myClass.availableSeat}</td>
                                
                                <td>{myClass.status}</td>
                                <td>{myClass.feedback}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Update</button>
                                </th>

                            </tr>)
                        }
                      
                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MyClasses;