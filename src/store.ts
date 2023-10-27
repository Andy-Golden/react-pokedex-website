import { configureStore } from "@reduxjs/toolkit";
import toggleButtonReducer from "layouts/ToggleButtonLayout/toggleButton.reducer";
import userReducer from "pages/LoginPage/user.reducer";

export const store = configureStore({
  reducer: { userReducer, toggleButtonReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
