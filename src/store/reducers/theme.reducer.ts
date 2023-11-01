import { createReducer } from "@reduxjs/toolkit";
import type { ThemeState } from "interfaces";

import { changeTheme } from "@actions";

const initialState: ThemeState = { theme: "dark" };

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
