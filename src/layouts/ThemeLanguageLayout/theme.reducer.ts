import type { ThemeState } from "@interfaces";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState: ThemeState = { theme: "dark" };

export const changeTheme = createAction<string>("theme/change");

const themeReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeTheme, (state, action) => {
    switch (action.type) {
      case "theme/change": {
        state.theme = action.payload;
        break;
      }
    }
  });
});

export default themeReducer;
