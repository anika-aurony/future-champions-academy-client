import React, { useContext, useEffect, useState } from 'react';


import { AuthContext } from '../Pages/providers/AuthProviders';
import { useQuery } from 'react-query';

const useAdmin = () => {
    
    const {user, loading} = useContext(AuthContext);

    const [isAdmin, setisAdmin] = useState([]);

    const [isAdminLoading, setisAdminLoading] = useState(loading);
    useEffect(() => {
        fetch(`https://future-champions-academy-server-side.vercel.app/users/admin/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                
                setisAdmin(data.admin);
                setisAdminLoading(false);
            });
    }, [])
    

    // const axiosSecure = 'https://future-champions-academy-server-side.vercel.app';

    // const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
    //     queryKey: ['isAdmin', user?.email],
    //     enabled: !loading,
    //     queryFn: async () => {
    //         const res = await fetch(`https://future-champions-academy-server-side.vercel.app/users/admin/${user?.email}`);
    //         console.log(res.json())
    //         return res.json().data.admin;
    //     }
    // })
    return [isAdmin, isAdminLoading]

    
};

export default useAdmin;