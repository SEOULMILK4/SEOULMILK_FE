import { api } from "./index";

export const postAgencyLogin = async (
  employeeNum: string,
  password: string
) => {
  try {
    const response = await api.post("/agency/login", {
      agencyId: employeeNum,
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
