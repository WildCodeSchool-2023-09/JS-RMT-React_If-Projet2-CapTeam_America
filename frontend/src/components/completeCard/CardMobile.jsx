import React from "react";
import { useLoaderData } from "react-router-dom";
import "./CardMobile.css";
import Identity from "./Identity";
import Stats from "./Stats";

function CardMobile() {
  const oneSuperHero = useLoaderData();
  return (
    <div className="completeCard">
      <div className="superHeroImg">
        <img
          src={oneSuperHero.image_md}
          alt={oneSuperHero.name}
          className="mobileCardImg"
        />
        <div className="superHeroIdentity">
          <h1 className="superHeroName">{oneSuperHero.name}</h1>
          <h2 className="superHeroRace">{oneSuperHero.race}</h2>
        </div>
      </div>
      <div className="containerInfos">
        <Identity oneSuperHero={oneSuperHero} />
        <Stats oneSuperHero={oneSuperHero} />
      </div>
    </div>
  );
}

export default CardMobile;
