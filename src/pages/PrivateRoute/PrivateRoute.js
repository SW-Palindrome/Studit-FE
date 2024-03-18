import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { validateToken } from "../../services/api";
import Loading from "../../components/Loading";

function PrivateRoute({ authentication }) {
  /**
   * 로그인 했는지 여부
   * 로그인 했을 경우 : true 라는 텍스트 반환
   * 로그인 안했을 경우 : null or false(로그아웃 버튼 눌렀을경우 false로 설정) 반환
   */
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setIsAuthenticated(true);
    setLoading(false);
    const checkAuthentication = async () => {
      try {
        const isAuthenticated = await validateToken(
          localStorage.getItem("studitAccessToken"),
        );
        setIsAuthenticated(isAuthenticated);
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false); // 비동기 작업 완료 후 로딩 상태 변경
      }
    };

    checkAuthentication();
  }, []);

  if (loading) {
    // 로딩 중일 때는 아무것도 렌더링하지 않음
    return <Loading />;
  }

  if (authentication) {
    // 인증이 반드시 필요한 페이지
    // 인증을 안했을 경우 로그인 페이지로, 했을 경우 해당 페이지로
    return isAuthenticated === null || isAuthenticated === false ? (
      <Navigate to="/" />
    ) : (
      <Outlet />
    );
  } else {
    // 인증이 반드시 필요 없는 페이지
    // 인증을 안햇을 경우 해당 페이지로 인증을 한 상태일 경우 main페이지로
    return isAuthenticated === null || isAuthenticated === false ? (
      <Outlet />
    ) : (
      <Navigate to="/home" />
    );
  }
}

export default PrivateRoute;
