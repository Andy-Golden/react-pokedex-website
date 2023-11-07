import type {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import type { ILoginFormInput } from "@interfaces";
import type { TFunction } from "i18next";

export interface LoginPagePrepareHook {
  t: TFunction<"Translation", undefined>;
  errors: FieldErrors<ILoginFormInput>;
  onSubmit: (data: ILoginFormInput) => void;
  register: UseFormRegister<ILoginFormInput>;
  handleSubmit: UseFormHandleSubmit<ILoginFormInput, undefined>;
}
