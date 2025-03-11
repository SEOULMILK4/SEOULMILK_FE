import { api } from "./index";

/**
 * 관리자 로그인
 *
 * @param masterKey - 마스터키
 * @returns
 */
export const postAdminLogin = async (masterKey: string) => {
  try {
    const response = await api.post("/admin/login", {
      masterKey,
    });

    if (response.data) {
      localStorage.setItem("accessToken", response.data.data.accessToken);
      localStorage.setItem("refreshToken", response.data.data.refreshToken);
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
