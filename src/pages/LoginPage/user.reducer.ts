import { createAction, createReducer } from "@reduxjs/toolkit";
import type { User, UserState } from "interfaces";

import { initialUser } from "./user";

const initialState: UserState = {
  user: initialUser,
};

export const createUser = createAction<User>("user/createUser");

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(createUser, (state, action) => {
    switch (action.type) {
      case "user/createUser": {
        state.user.email = action.payload.email;
        state.user.password = action.payload.password;
        break;
      }
      default: {
        break;
      }
    }
  });
});

export default userReducer;
