const BASE_URL = process.env.REACT_APP_API_URL_DEV;

export const validateToken = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/token-info/${token}`);

    if (!response.ok) {
      // 상태 코드가 200 OK가 아니면 오류 발생
      throw new Error("Failed to validate token");
    }

    const data = await response.json();

    if (data.sub !== null && !isNaN(data.sub)) {
      return true; // 토큰이 유효한 경우
    } else {
      return false; // 토큰이 유효하지 않은 경우
    }
  } catch (error) {
    console.error("Error validating token:", error);
    throw error; // 오류 처리
  }
};
