import React from "react";
import { ErrorMessage } from "@hookform/error-message";

import { Button, FormControl, TextInput } from "@components";

import { useLoginPagePrepareHook } from "./helper";

import "./styles.scss";

const LoginPage = (): JSX.Element => {
  const { t, errors, onSubmit, register, handleSubmit } =
    useLoginPagePrepareHook();

  return (
    <div className="auth-container">
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <FormControl onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="text"
          placeholder={t("loginPage.email")}
          register={register("email", {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: t(`loginPage.error.invalidEmail`),
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <p className="error-message">{message}</p>}
        />
        <TextInput
          type="password"
          placeholder={t("loginPage.password")}
          register={register("password", {
            required: true,
            minLength: {
              value: 6,
              message: t("loginPage.error.invalidLengthPassword"),
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => <p className="error-message">{message}</p>}
        />
        <Button type="submit">{t("loginPage.label")}</Button>
        <p className="message">
          {t("loginPage.notRegister")}{" "}
          <span>{t("loginPage.createAnAccount")}</span>
        </p>
      </FormControl>
    </div>
  );
};

export default LoginPage;
