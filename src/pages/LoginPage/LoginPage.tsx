import React from "react";
import { ErrorMessage } from "@hookform/error-message";

import { AuthContainer, Button, FormControl, TextInput } from "@components";

import { useLoginPagePrepareHook } from "./helper";

import "./styles.scss";

const LoginPage = (): JSX.Element => {
  const { errors, onSubmit, register, handleSubmit } =
    useLoginPagePrepareHook();

  return (
    <AuthContainer>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <FormControl onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="text"
          placeholder="email"
          register={register("email", {
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
        <TextInput
          type="password"
          placeholder="password"
          register={register("password", {
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
        <Button type="submit">login</Button>
        <p className="message">
          Not registered? <span>Create an account</span>
        </p>
      </FormControl>
    </AuthContainer>
  );
};

export default LoginPage;
