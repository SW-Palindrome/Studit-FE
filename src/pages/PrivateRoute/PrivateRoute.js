import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { validateToken } from "../../services/api";
import Loading from "../../components/Loading";

function PrivateRoute({ authentication }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const isAuthenticated = await validateToken(
          localStorage.getItem("studitAccessToken"),
        );
        setIsAuthenticated(isAuthenticated);
      } catch (error) {
        alert("로그인을 하시고 다시 시도해주세요.");
        localStorage.removeItem("studitAccessToken");
        localStorage.removeItem("studitRefreshToken");
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (authentication) {
    if (isAuthenticated === false) {
      return <Navigate to="/" />;
    } else {
      return <Outlet />;
    }
  } else {
    if (isAuthenticated === false) {
      return <Outlet />;
    } else {
      return <Navigate to="/home" />;
    }
  }
}

export default PrivateRoute;
