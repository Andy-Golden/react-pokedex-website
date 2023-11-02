import type { ThemeState } from "@interfaces";
import { createSlice } from "@reduxjs/toolkit";

import { ThemeEnum } from "@enums";

const initialState: ThemeState = { theme: ThemeEnum.dark };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
