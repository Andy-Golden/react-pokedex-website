import { createAction } from "@reduxjs/toolkit";
import type { User } from "interfaces";

export const createUser = createAction<User>("user/createUser");
