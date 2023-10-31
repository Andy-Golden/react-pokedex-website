import React from "react";
import { useTranslation } from "react-i18next";
import { ErrorMessage } from "@hookform/error-message";

import { AuthContainer, Button, FormControl, TextInput } from "@components";
import { ThemeLanguageLayout } from "@layouts";

import { useLoginPagePrepareHook } from "./helper";

import "./styles.scss";

const LoginPage = (): JSX.Element => {
  const { t } = useTranslation();
  const { errors, onSubmit, register, handleSubmit } =
    useLoginPagePrepareHook();

  return (
    <ThemeLanguageLayout>
      <AuthContainer>
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
            render={({ message }) => (
              <p style={{ width: "100%", color: "red" }}>{message}</p>
            )}
          />
          <TextInput
            type="password"
            placeholder={t("loginPage.password")}
            register={register("password", {
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
          <Button type="submit">{t("loginPage.label")}</Button>
          <p className="message">
            {t("loginPage.notRegister")}{" "}
            <span>{t("loginPage.createAnAccount")}</span>
          </p>
        </FormControl>
      </AuthContainer>
    </ThemeLanguageLayout>
  );
};

export default LoginPage;
