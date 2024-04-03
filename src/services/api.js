const BASE_URL = process.env.REACT_APP_API_URL_DEV;

export const validateToken = async (accessToken) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/token-info/${accessToken}`);
    if (!response.ok) {
      // 상태 코드가 200 OK가 아니면 오류 발생
      throw new Error("Failed to validate token");
    }
    return true;
  } catch (error) {
    return await refreshToken(accessToken); // 토큰이 만료된 경우 토큰 갱신
  }
};

export const refreshToken = async (accessToken) => {
  try {
    const refreshToken = localStorage.getItem("studitRefreshToken");
    var base64Url = refreshToken.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(""),
    );
    const id = JSON.parse(jsonPayload)["sub"];

    const response = await fetch(`${BASE_URL}/auth/token-refresh/`, {
      method: "POST",
      body: JSON.stringify({
        user_id: id,
        refresh_token: accessToken,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to refresh token");
    }
    const data = await response.json();
    localStorage.setItem("studitAccessToken", data);
    return true;
  } catch (error) {
    localStorage.removeItem("studitAccessToken");
    localStorage.removeItem("studitRefreshToken");
    throw error;
  }
};
