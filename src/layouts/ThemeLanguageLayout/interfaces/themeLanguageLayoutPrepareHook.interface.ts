import type React from "react";
import type { User } from "@interfaces";

export interface ThemeLanguageLayoutPrepareHook {
  user: User;
  theme: string;
  lang: string;
  onLogout: () => void;
  onSwitchTheme: () => void;
  onSwitchLang: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
