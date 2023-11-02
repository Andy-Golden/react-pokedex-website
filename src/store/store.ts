import { configureStore } from "@reduxjs/toolkit";

import { langReducer, themeReducer, userReducer } from "./slices";

export const store = configureStore({
  reducer: { userReducer, themeReducer, langReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
