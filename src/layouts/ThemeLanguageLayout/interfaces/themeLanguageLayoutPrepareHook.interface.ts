import type React from "react";

export interface ThemeLanguageLayoutPrepareHook {
  theme: string;
  lang: string;
  onSwitchTheme: () => void;
  onSwitchLang: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
