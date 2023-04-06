import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContextProvider';   

type ProtectedRouteProps = {
    redirectPath?: string;
    children: JSX.Element;
};

function ProtectedRoute({ redirectPath = '/', children }: ProtectedRouteProps) {
    const user = useContext(UserContext);
    if (!user.user) {
        return <Navigate to={redirectPath} replace />;
    }
    return <>{children}</>;
};

export default ProtectedRoute;