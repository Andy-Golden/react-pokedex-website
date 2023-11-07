import type { ILoginFormInput, ILoginResponse } from "@interfaces";

import { instance } from "@server";

import { AUTH } from "./constants";

const login = async (data: ILoginFormInput): Promise<ILoginResponse> => {
  const response = await instance.post(AUTH.LOGIN, data);
  return response.data;
};

export { login };
