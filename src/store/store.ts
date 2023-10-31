import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "reducers/theme.reducer";
import userReducer from "reducers/user.reducer";

export const store = configureStore({
  reducer: { userReducer, themeReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
