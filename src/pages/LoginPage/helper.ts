import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { User } from "@interfaces";
import type { RootState } from "@store";
import { createUser } from "store/slices";

import type { ILoginFormInput, LoginPagePrepareHook } from "./interfaces";

const useLoginPagePrepareHook = (): LoginPagePrepareHook => {
  const user = useSelector((state: RootState) => state.userReducer.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.email !== null && user.password !== null) {
      navigate("/");
    }
  }, [user]);

  const dispatch = useDispatch();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ILoginFormInput>();

  const onSubmit = (data: ILoginFormInput): void => {
    const loginUser: User = { email: data.email, password: data.password };
    dispatch(createUser(loginUser));
  };

  return { errors, register, handleSubmit, onSubmit };
};

export { useLoginPagePrepareHook };
