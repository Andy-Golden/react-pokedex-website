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
  },
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer;
