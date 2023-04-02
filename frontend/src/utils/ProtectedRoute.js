import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoute({ user, redirectPath = '/', children }) {
    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet>{children}</Outlet>;
};

export default ProtectedRoute;