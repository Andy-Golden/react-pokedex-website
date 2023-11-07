import type { UserState } from "@interfaces";
import { createSlice } from "@reduxjs/toolkit";

import { initialUser } from "./user";

const initialState: UserState = {
  user: initialUser,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.user = action.payload;
    },
    deleteUser: (state) => {
      state.user.email = null;
      state.user.accessToken = null;
    },
  },
});

export const { createUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
