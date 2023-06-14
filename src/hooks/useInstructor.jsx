import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Pages/providers/AuthProviders';

const useInstructor = () => {

    const {user, loading} = useContext(AuthContext);


    const [isInstructor, setisInstructor] = useState([]);

    const [isInstructorLoading, setisInstructorLoading] = useState(loading);
    useEffect(() => {
        fetch(`https://future-champions-academy-server-side.vercel.app/users/instructor/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                
                setisInstructor(data.instructor);
                setisInstructorLoading(false);
            });
    }, [])
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;