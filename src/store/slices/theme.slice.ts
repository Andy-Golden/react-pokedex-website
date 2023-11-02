import type { ThemeState } from "@interfaces";
import { createSlice } from "@reduxjs/toolkit";

import { Theme } from "@enums";

const initialState: ThemeState = { theme: Theme.DARK };

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
