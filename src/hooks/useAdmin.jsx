import React, { useContext, useEffect, useState } from 'react';


import { AuthContext } from '../Pages/providers/AuthProviders';
import { useQuery } from 'react-query';

const useAdmin = () => {
    
    const {user, loading} = useContext(AuthContext);

    const [isAdmin, setisAdmin] = useState([]);

    const [isAdminLoading, setisAdminLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/users/admin/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setisAdmin(data.admin);
                setisAdminLoading(false);
            });
    }, [])
    console.log(isAdmin)

    // const axiosSecure = 'http://localhost:5000';

    // const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
    //     queryKey: ['isAdmin', user?.email],
    //     enabled: !loading,
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`);
    //         console.log(res.json())
    //         return res.json().data.admin;
    //     }
    // })
    return [isAdmin, isAdminLoading]

    
};

export default useAdmin;