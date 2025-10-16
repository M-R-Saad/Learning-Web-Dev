import React from 'react';
import { Navigate, useLocation } from 'react-router';
import AuthContext from '../../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = React.use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='flex justify-center items-center py-40'><span className="loading loading-bars loading-xl"></span></div>;
    }

    if (!user) {
        return <Navigate state={location?.pathname} to="/login" />;
    }

    return children;
};

export default PrivateRoute;
