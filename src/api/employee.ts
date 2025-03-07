import { api } from "./index";

export const postEmployeeLogin = async (
  employeeNum: string,
  password: string
) => {
  try {
    const response = await api.post("/employee/login", {
      employeeNum,
      password,
    });

    if (response.data) {
      const accessToken = response.data.data?.accessToken;
      return accessToken;
    }
  } catch (error) {
    console.log(error);
  }
};
