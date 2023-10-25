import { configureStore } from "@reduxjs/toolkit";
import userReducer from "pages/LoginPage/user.reducer";

export const store = configureStore({ reducer: { userReducer } });

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
