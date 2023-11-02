import type {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import type { TFunction } from "i18next";

import type { ILoginFormInput } from "./ILoginFormInput.interface";

export interface LoginPagePrepareHook {
  t: TFunction<"translation", undefined>;
  errors: FieldErrors<ILoginFormInput>;
  onSubmit: (data: ILoginFormInput) => void;
  register: UseFormRegister<ILoginFormInput>;
  handleSubmit: UseFormHandleSubmit<ILoginFormInput, undefined>;
}
