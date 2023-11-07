import React from "react";

import { Button } from "@components";

import type { ProfileCardProps } from "./interfaces";

import "./styles.scss";

const ProfileCard = ({
  email,
  name,
  role,
  image,
}: ProfileCardProps): JSX.Element => {
  return (
    <div className="card-user">
      <div className="card-user__header">
        <img className="image" src={image} alt="user avatar" />
      </div>
      <div className="card-user__body">
        <span className="name">{name}</span>
        <span className="email">{email}</span>
        <span>{role}</span>
      </div>
      <div className="card-user__footer">
        <Button type="button">Contact</Button>
      </div>
    </div>
  );
};

export default ProfileCard;
