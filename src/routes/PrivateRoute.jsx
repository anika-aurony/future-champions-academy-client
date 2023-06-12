import React, { useContext } from 'react';
import { AuthContext } from '../Pages/providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
            <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
        </div>
    }
    if(user){
        return children;
    }
    return  <div>
    
    <Navigate state={{from: location}} to="/login" replace></Navigate>
</div>;
};

export default PrivateRoute;