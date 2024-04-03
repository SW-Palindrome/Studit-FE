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
      alert("토큰이 만려되어 로그인이 필요합니다.");
      return <Navigate to="/" />;
    } else {
      return <Outlet />;
    }
  } else {
    if (isAuthenticated === false) {
      return <Outlet />;
    } else {
      alert("이미 로그인되어 있습니다.");
      return <Navigate to="/home" />;
    }
  }
}

export default PrivateRoute;
