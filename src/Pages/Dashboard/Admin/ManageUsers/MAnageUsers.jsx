import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProviders';

const MAnageUsers = () => {
    const [users, setUsers] = useState();
    
    console.log(users)

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                
            })
    }, [])

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    fetch('http://localhost:5000/users')
                        .then(res => res.json())
                        .then(data => setUsers(data))
                }
            })

    }

    const handleMakeInstructor = user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    fetch('http://localhost:5000/users')
                        .then(res => res.json())
                        .then(data => setUsers(data))
                }
            })

    }

    return (
        <div>
            <h3 className="text-3xl font-semibold my-4">Total Users: {users?.length}</h3>

            <table className="table">
                {/* head */}
                <thead>
                    <tr>


                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    { users &&
                        users.map(user => <tr key={user._id}>


                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role === 'instructor' ? 'instructor' :
                                <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-indigo-600  text-white" disabled= {user.role === 'admin'}>Make Instructor</button>
                            }</td>
                            <td>{user.role === 'admin' ? 'admin' :
                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-indigo-600  text-white" disabled={user.role === 'instructor'}>Make Admin</button>
                            }</td>

                        </tr>)
                    }

                </tbody>


            </table>
        </div>
    );
};

export default MAnageUsers;