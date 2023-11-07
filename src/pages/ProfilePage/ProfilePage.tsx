import React from "react";

import userAvatar from "@assets/images/user.png";
import { ProfileCard } from "@components";

import { useProfilePagePrepareHook } from "./helper";

const ProfilePage = (): JSX.Element => {
  const { user } = useProfilePagePrepareHook();
  return (
    <div className="auth-container">
      <ProfileCard
        email={user.email}
        name={"John Doe"}
        role={"User"}
        image={userAvatar}
      />
    </div>
  );
};

export default ProfilePage;
