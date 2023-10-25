import { createAction, createReducer } from "@reduxjs/toolkit";
import { initialUser } from "./user";
import { type UserState } from "interfaces/UserState.interface";
import { type User } from "interfaces/User.interface";

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
