import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';

const MyClasses = () => {
    const { user } = useContext(AuthContext);
    const [myClasses, setmyClasses] = useState([]);

    console.log(myClasses)

    useEffect(() => {
        fetch('http://localhost:5000/activities')
            .then(res => res.json())
            .then(data => {
               const myClass= data.filter(data => data.instructorEmail === user.email )
                setmyClasses(myClass)
            })
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default MyClasses;