/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect } from "react";
import "./styles.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "store";
import type { ILoginFormInput } from "interfaces/ILoginFormInput.interface";
import { createUser } from "./user.reducer";
import { type User } from "./user";
import { useNavigate } from "react-router-dom";

function LoginPage(): JSX.Element {
  const user = useSelector((state: RootState) => state.userReducer.user);
  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (user.email && user.password) {
      navigate("/");
    }
  }, [user]);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    // formState: { errors },
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
