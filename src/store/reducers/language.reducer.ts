import { createReducer } from "@reduxjs/toolkit";
import type { LanguageState } from "interfaces";

import { changeLang } from "@actions";

const initialState: LanguageState = { lang: "en" };

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
