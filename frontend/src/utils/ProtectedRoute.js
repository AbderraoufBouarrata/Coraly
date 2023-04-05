import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContextProvider';   

function ProtectedRoute({ redirectPath = '/', children }) {
    const user = useContext(UserContext);
    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }
    return <>{children}</>;
};

export default ProtectedRoute;