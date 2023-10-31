import type { UserState } from "@interfaces";
import { createReducer } from "@reduxjs/toolkit";

import { createUser } from "@actions";

import { initialUser } from "./user";

const initialState: UserState = {
  user: initialUser,
};

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
