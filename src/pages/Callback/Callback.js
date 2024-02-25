import { useEffect } from "react";

function Callback() {
  useEffect(() => {
    const handleOAuthCallback = async () => {
      const params = new URLSearchParams(window.location.search);
      const accessToken = params.get("access_token");
      const refreshToken = params.get("refresh_token");

      if (accessToken) {
        var currentDate = new Date();
        var accessExpirationTime = new Date(currentDate.getTime() + 15 * 60000);
        document.cookie = `studitAccessToken=${accessToken}; expires=${accessExpirationTime.toUTCString()}; path=/`;
      }

      if (refreshToken) {
        currentDate = new Date();
        var refreshExpirationTime = new Date(
          currentDate.getTime() + 7 * 24 * 60 * 60000,
        );
        document.cookie = `studitRefreshToken=${refreshToken}; expires=${refreshExpirationTime.toUTCString()}; path=/`;
      }
      window.location.href = "http://localhost:3000/home";
    };

    handleOAuthCallback();
  }, [history]);

  return null;
}

export default Callback;
