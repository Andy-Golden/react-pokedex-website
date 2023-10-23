import "./styles.scss";
import React, { useEffect } from "react";
import { getListPokeDetails } from "apis/pokemon.api";
import { NUMBERS_OF_POKE } from "./constants";

function HomePage(): JSX.Element {
  useEffect(() => {
    getListPokeDetails(NUMBERS_OF_POKE)
      .then((data) => {
        console.log("data: ", data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);
  return (
    <div className="wrapper">
      <div className="filtering"></div>
      <div className="action"></div>
    </div>
  );
}

export default HomePage;
