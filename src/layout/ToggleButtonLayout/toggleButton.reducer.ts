import { createAction, createReducer } from "@reduxjs/toolkit";

interface ThemeState {
  theme: string;
}

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
