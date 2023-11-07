import type React from "react";
import type { User } from "@interfaces";
import type { TFunction } from "i18next";

export interface ThemeLanguageLayoutPrepareHook {
  t: TFunction<"Translation", undefined>;
  user: User;
  theme: string;
  lang: string;
  onLogout: () => void;
  onSwitchTheme: () => void;
  onSwitchLang: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
