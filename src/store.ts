import { configureStore } from "@reduxjs/toolkit";
import userReducer from "pages/LoginPage/user.reducer";
import toggleButtonReducer from "layout/ToggleButtonLayout/toggleButton.reducer";

export const store = configureStore({
  reducer: { userReducer, toggleButtonReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
