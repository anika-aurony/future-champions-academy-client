import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const InstructorHome = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h1>Welcome Instructor: {user.displayName}  </h1>
        </div>
    );
};

export default InstructorHome;