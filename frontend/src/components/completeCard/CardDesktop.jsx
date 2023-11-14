import React from "react";
import { useLoaderData } from "react-router-dom";
import "./CardDesktop.css";
import "./CompleteCard.css";
import Stats from "./Stats";
import Identity from "./Identity";

function CardDesktop() {
  const oneSuperHero = useLoaderData();
  return (
    <div className="completeCard">
      <div className="superHeroImg">
        <img
          src={oneSuperHero.image_md}
          alt={oneSuperHero.name}
          className="superImg"
        />
        <div className="superHeroIdentity">
          <h1 className="superHeroName">{oneSuperHero.name}</h1>
          <h2 className="superHeroRace">{oneSuperHero.race}</h2>
        </div>
      </div>
      <div className="containerIdentity">
        <Identity oneSuperHero={oneSuperHero} />
      </div>
      <div className="containerStats">
        <Stats oneSuperHero={oneSuperHero} />
      </div>
    </div>
  );
}

export default CardDesktop;
