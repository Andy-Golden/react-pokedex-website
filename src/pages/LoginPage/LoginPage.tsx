import React from "react";
import { useTranslation } from "react-i18next";
import { ErrorMessage } from "@hookform/error-message";

import { useLoginPagePrepareHook } from "./helper";

import "./styles.scss";

const LoginPage = (): JSX.Element => {
  const { t } = useTranslation();
  const { errors, onSubmit, register, handleSubmit } =
    useLoginPagePrepareHook();

  return (
    <div className="login-container">
      <div className="form">
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <input
            type="text"
            placeholder={t("loginPage.email")}
            {...register("email", {
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
            render={({ message }) => (
              <p style={{ width: "100%", color: "red" }}>{message}</p>
            )}
          />
          <input
            type="password"
            placeholder={t("loginPage.password")}
            {...register("password", {
              required: true,
              minLength: {
                value: 5,
                message: t("loginPage.error.invalidLengthPassword"),
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
          <button type="submit">{t("loginPage.label")}</button>
          <p className="message">
            {t("loginPage.notRegister")}{" "}
            <span>{t("loginPage.createAnAccount")}</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
