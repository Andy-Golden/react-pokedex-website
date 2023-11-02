import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@store";
import { switchTheme } from "store/slices";

import { ThemeEnum } from "@enums";

import type { ThemeLanguageLayoutPrepareHook } from "./interfaces";

const useThemeLanguageLayoutPrepareHook =
  (): ThemeLanguageLayoutPrepareHook => {
    const theme = useSelector((state: RootState) => state.themeReducer.theme);

    const dispatch = useDispatch();

    const handleChange = (): void => {
      const newTheme =
        theme === ThemeEnum.dark ? ThemeEnum.light : ThemeEnum.dark;
      dispatch(switchTheme(newTheme));
      document.documentElement.setAttribute("data-theme", newTheme);
    };

    return { onChangeTheme: handleChange };
  };

export { useThemeLanguageLayoutPrepareHook };
