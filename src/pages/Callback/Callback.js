import { useEffect } from "react";

function Callback() {
  useEffect(() => {
    const handleOAuthCallback = async () => {
      const params = new URLSearchParams(window.location.search);
      const accessToken = params.get("access_token");
      const refreshToken = params.get("refresh_token");

      if (accessToken) {
        localStorage.setItem("studitAccessToken", accessToken);
      }

      if (refreshToken) {
        localStorage.setItem("studitRefreshToken", refreshToken);
      }
      const homeUrl =
        process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_FE_URL_DEV
          : process.env.REACT_APP_FE_URL_PROD;

      window.location.href = `${homeUrl}/home`;
    };

    handleOAuthCallback();
  }, []);

  return null;
}

export default Callback;
