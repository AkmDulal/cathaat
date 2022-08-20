import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthService from "./Auth.Services"
export default function PrivateRoute() {
    const isLogged = AuthService.privateoRouter();
    console.log(isLogged)
    // return isLogged ? <Outlet /> : <Navigate to="/" />;
    return isLogged ? <Navigate to="/" /> : <Outlet />;
}
