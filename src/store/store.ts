import { configureStore } from "@reduxjs/toolkit";

import { themeReducer, userReducer } from "@slices";

export const store = configureStore({
  reducer: { userReducer, themeReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
