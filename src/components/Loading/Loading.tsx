import React from "react";

import Image from "./pokeball_gray.png";

import "./styles.scss";

const Loading = (): JSX.Element => {
  return (
    <div className="load-animation">
      <img src={Image} alt="load pokeball" />
    </div>
  );
};

export default Loading;
