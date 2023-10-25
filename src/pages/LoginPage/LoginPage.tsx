/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";
import "./styles.scss";
import { useForm } from "react-hook-form";
import type { ILoginFormInput } from "interfaces/ILoginFormInput.interface";

function LoginPage(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInput>();

  const onSubmit = (data: ILoginFormInput): void => {
    console.log(data);
  };

  console.log(errors);

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
