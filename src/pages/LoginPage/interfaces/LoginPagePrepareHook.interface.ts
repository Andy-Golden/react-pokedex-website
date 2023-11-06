import type {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

import type { ILoginFormInput } from "./ILoginFormInput.interface";

export interface LoginPagePrepareHook {
  errors: FieldErrors<ILoginFormInput>;
  onSubmit: (data: ILoginFormInput) => void;
  register: UseFormRegister<ILoginFormInput>;
  handleSubmit: UseFormHandleSubmit<ILoginFormInput, undefined>;
}
