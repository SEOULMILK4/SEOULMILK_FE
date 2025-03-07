import { api } from "./index";

export const postAdminLogin = async (masterKey: string) => {
  try {
    const response = await api.post("/admin/login", {
      masterKey,
    });

    if (response.data) {
      const accessToken = response.data.data?.accessToken;
      return accessToken;
    }
  } catch (error) {
    console.log(error);
  }
};
