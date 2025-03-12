import { useUserStore } from "@/stores/useUserStore";
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
      localStorage.setItem("role", "admin");
      localStorage.setItem("accessToken", response.data.data.accessToken);
      localStorage.setItem("refreshToken", response.data.data.refreshToken);

      useUserStore.getState().setUser({
        role: "admin",
      });
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getAdminNtsTax = async (page: number, status?: string) => {
  const accessToken = localStorage.getItem("accessToken");

  const params = new URLSearchParams();
  params.append("page", page.toString());
  if (status) {
    params.append("status", status);
  }

  try {
    const response = await api.get(`/admin/nts-tax?${params.toString()}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.data) {
      return response.data.data;
    }
  } catch (error) {
    console.error(error);
  }
};

/**
 * 관리자자 - 세금 계산서 페이지 삭제
 *
 * @param deleteNtsTaxIds
 * @returns
 */
export const deleteNtsTaxIds = async (ntsTaxId: number[]) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const response = await api.delete("/admin/nts-tax", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: { ntsTaxId: ntsTaxId },
    });

    if (response.data) {
      return response.data.success;
    }
  } catch (error) {
    console.error("다중 삭제 API 호출 중 오류 발생:", error);
  }
};
