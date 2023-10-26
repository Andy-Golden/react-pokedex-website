/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import type { User } from "interfaces";
import type { RootState } from "store";

import type { ILoginFormInput } from "./interface/ILoginFormInput.interface";
import { createUser } from "./user.reducer";

import "./styles.scss";

function LoginPage(): JSX.Element {
  const user = useSelector((state: RootState) => state.userReducer.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.email !== null && user.password !== null) {
      navigate("/");
    }
  }, [user]);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInput>();

  const onSubmit = (data: ILoginFormInput): void => {
    const loginUser: User = { email: data.email, password: data.password };
    dispatch(createUser(loginUser));
  };

  return (
    <div className="login-container">
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <input
            type="text"
            placeholder="email"
            {...register("email", {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter valid email",
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => (
              <p style={{ width: "100%", color: "red" }}>{message}</p>
            )}
          />
          <input
            type="password"
            placeholder="password"
            {...register("password", {
              required: true,
              minLength: {
                value: 5,
                message: "Password must have at least 5 characters",
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => (
              <p style={{ width: "100%", color: "red" }}>{message}</p>
            )}
          />
          <button type="submit">login</button>
          <p className="message">
            Not registered? <span>Create an account</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
