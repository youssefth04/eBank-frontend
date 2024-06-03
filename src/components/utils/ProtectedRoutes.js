import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = ({ authenticated }) => {
    // Check if the user is authenticated
    if (authenticated) {
        // If authenticated, render the child routes
        return <Outlet />;
    } else {
        // If not authenticated, redirect to the authentication page
        return <Navigate to='/authentification' />;
    }
};

export default ProtectedRoutes;