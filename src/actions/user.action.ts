import type { User } from "@interfaces";
import { createAction } from "@reduxjs/toolkit";

export const createUser = createAction<User>("user/createUser");
