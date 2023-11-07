import type { User } from "@interfaces";

import { instance } from "@server";

import { USER } from "./constants";

const getMe = async (): Promise<User> => {
  const response = await instance.get(USER.PROFILE);
  return response.data;
};

export { getMe };
