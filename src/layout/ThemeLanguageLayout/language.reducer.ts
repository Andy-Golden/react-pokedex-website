import { createAction, createReducer } from "@reduxjs/toolkit";
import type { LanguageState } from "interfaces";

const initialState: LanguageState = { lang: "en" };

export const changeLang = createAction<string>("lang/change");

const langReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeLang, (state, action) => {
    switch (action.type) {
      case "lang/change": {
        state.lang = action.payload;
        break;
      }
    }
  });
});

export default langReducer;
