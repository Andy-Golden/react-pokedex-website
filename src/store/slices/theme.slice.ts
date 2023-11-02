import type { ThemeState } from "@interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ThemeState = { theme: "dark" };

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
