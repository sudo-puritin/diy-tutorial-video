import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import LoadingScreen from "../../components/LoadingScreen";

import "./AuthRequire.scss";

function AuthRequire({ children }) {
  const { isAuthenticated, isInitialized } = useAuth();

  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!isInitialized) {
    return (
      <div>
        <LoadingScreen />
      </div>
    );
  }

  return children;
}

export default AuthRequire;
