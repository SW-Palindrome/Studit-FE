const BASE_URL = process.env.REACT_APP_API_URL_DEV;

export const validateToken = async (accessToken) => {
  try {
    if (!accessToken) {
      throw Error("Error: No access token");
    }
    const response = await fetch(`${BASE_URL}/auth/token-info/${accessToken}`);
    if (!response.ok) {
      // 상태 코드가 200 OK가 아니면 액세스 토큰이 유효하지 않은 것이므로 갱신시도
      return await refreshToken(accessToken);
    }
    return true;
  } catch (error) {
    throw Error(error);
  }
};

const refreshToken = async (accessToken) => {
  try {
    var base64Url = accessToken.split(".")[1];
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
    const refreshToken = localStorage.getItem("studitRefreshToken");
    const response = await fetch(`${BASE_URL}/auth/token-refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: id,
        refresh_token: refreshToken,
      }),
    });
    if (!response.ok) {
      throw new Error("Error: Failed to refresh token");
    }
    const data = await response.text();
    localStorage.setItem("studitAccessToken", data);
    return true;
  } catch (error) {
    throw Error(error);
  }
};
