import { createAction } from "@reduxjs/toolkit";

export const changeTheme = createAction<string>("theme/change");
