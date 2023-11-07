import { useEffect } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { ILoginFormInput } from "@interfaces";
import type { RootState } from "@store";
import { createUser } from "store/slices";

import { login } from "@apis";

import type { LoginPagePrepareHook } from "./interfaces";

const useLoginPagePrepareHook = (): LoginPagePrepareHook => {
  const { t } = useTranslation();
  const user = useSelector((state: RootState) => state.userReducer.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.email !== null) {
      navigate("/");
    }
  }, [user]);

  const { showBoundary } = useErrorBoundary();
  const { mutate: mutateLogin } = useMutation(login);
  const dispatch = useDispatch();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ILoginFormInput>();

  const onSubmit = (data: ILoginFormInput): void => {
    mutateLogin(data, {
      onSuccess: (dataResponse) => {
        localStorage.setItem("user", JSON.stringify(dataResponse));
        dispatch(createUser({ email: dataResponse.email }));
      },
      onError: (error) => {
        showBoundary(error);
      },
    });
  };

  return { t, errors, register, handleSubmit, onSubmit };
};

export { useLoginPagePrepareHook };
