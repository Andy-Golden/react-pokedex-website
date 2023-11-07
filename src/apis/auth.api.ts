import type { ILoginFormInput, ILoginResponse } from "@interfaces";
import type { AxiosError } from "axios";

import { instance } from "@server";

import { AUTH } from "./constants";

const login = async (data: ILoginFormInput): Promise<ILoginResponse> => {
  try {
    const response = await instance.post(AUTH.LOGIN, data);
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
};

export { login };
