import { createAction, createReducer } from "@reduxjs/toolkit";
import { type ThemeState } from "interfaces/ThemeState.interface";

const initialState: ThemeState = { theme: "dark" };

export const changeTheme = createAction<string>("theme/change");

const toggleButtonReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeTheme, (state, action) => {
    switch (action.type) {
      case "theme/change": {
        state.theme = action.payload;
        break;
      }
    }
  });
});

export default toggleButtonReducer;
