import React from "react";
import { Navigate, Outlet } from 'react-router-dom';
import auth from "../Services/Auth/Auth";

export const ProtectedRoute = () => {
    const flag = auth.isAuthenticated(); // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return flag ? <Outlet /> : <Navigate to="/cPanel/superuser/login" />;
};
