import React from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = React.use(AuthContext);

    const location = useLocation();
    // console.log('Private route location:', location);

    if (loading) {
        return <Loading />;
    }

    if (user && user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to="/auth/login" />;
};

export default PrivateRoute;