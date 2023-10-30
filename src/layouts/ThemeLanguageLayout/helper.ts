import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "store";

import type { ThemeLanguageLayoutPrepareHook } from "./interfaces";
import { changeTheme } from "./theme.reducer";

const useThemeLanguageLayoutPrepareHook =
  (): ThemeLanguageLayoutPrepareHook => {
    const theme = useSelector((state: RootState) => state.themeReducer.theme);

    const dispatch = useDispatch();

    const handleChange = (): void => {
      const newTheme = theme === "dark" ? "light" : "dark";
      dispatch(changeTheme(newTheme));
      document.documentElement.setAttribute("data-theme", newTheme);
    };

    return { onChangeTheme: handleChange };
  };

export { useThemeLanguageLayoutPrepareHook };
