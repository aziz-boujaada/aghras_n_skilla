import {Navigate, replace} from 'react-router-dom'
import type { JSX } from 'react/jsx-runtime';

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedRoles: ('super_admin' | 'commune_president' | 'driver' | 'parent')[];
}

export function ProtectedRoute({children , allowedRoles}:ProtectedRouteProps){
    const token = localStorage.getItem('auth_token');
    const userRole = localStorage.getItem('user_role') as any;

    if(!token){
        return <Navigate to="/login" replace />
    }

    if(!allowedRoles.includes(userRole)){
        return <Navigate to="/login" replace />
    }
return children
}