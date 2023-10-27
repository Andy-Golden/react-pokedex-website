import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "store";

import { type ToggleButtonLayoutPrepareHook } from "./interfaces";
import { changeTheme } from "./toggleButton.reducer";

const useToggleButtonLayoutPrepareHook = (): ToggleButtonLayoutPrepareHook => {
  const theme = useSelector(
    (state: RootState) => state.toggleButtonReducer.theme,
  );

  const dispatch = useDispatch();

  const handleChange = (): void => {
    const newTheme = theme === "dark" ? "light" : "dark";
    dispatch(changeTheme(newTheme));
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return { onChangeTheme: handleChange };
};

export { useToggleButtonLayoutPrepareHook };
