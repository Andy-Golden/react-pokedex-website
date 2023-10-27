import { configureStore } from "@reduxjs/toolkit";
import langReducer from "layouts/ThemeLanguageLayout/language.reducer";
import themeReducer from "layouts/ThemeLanguageLayout/theme.reducer";
import userReducer from "pages/LoginPage/user.reducer";

export const store = configureStore({
  reducer: { userReducer, themeReducer, langReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
