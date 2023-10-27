import React from "react";
import { ErrorMessage } from "@hookform/error-message";

import { useLoginPagePrepareHook } from "./helper";

import "./styles.scss";

const LoginPage = (): JSX.Element => {
  const { errors, onSubmit, register, handleSubmit } =
    useLoginPagePrepareHook();

  return (
    <div className="login-container">
      <div className="form">
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
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
};

export default LoginPage;
