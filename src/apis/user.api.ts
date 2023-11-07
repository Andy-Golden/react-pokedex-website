import type { Profile } from "@interfaces";

import { instance } from "@server";

import { USER } from "./constants";

const getMe = async (): Promise<Profile> => {
  const response = await instance.get(USER.PROFILE);
  return response.data;
};

export { getMe };
