import React from "react";

import { useProfilePagePrepareHook } from "./helper";

import "./styles.scss";

const ProfilePage = (): JSX.Element => {
  const { user } = useProfilePagePrepareHook();
  console.log("🚀 ~ file: ProfilePage.tsx:7 ~ ProfilePage ~ user:", user.email);
  return <div className="user-info">{user.email}</div>;
};

export default ProfilePage;
