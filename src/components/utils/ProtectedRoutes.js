import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        // Check authentication status here, perhaps by verifying token in localStorage
        const token = localStorage.getItem("token");
        console.log("Token from localStorage:", token); // Log the token for debugging
        if (token) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    }, []);

    console.log("Authenticated:", authenticated); // Log the authentication status for debugging

    return authenticated ? <Outlet /> : <Navigate to='/authentification' />;
};

export default ProtectedRoutes;