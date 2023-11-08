import React from "react";
import "./completeCardMobile.css";
import intelligence from "../../assets/intelligence.png";
import strength from "../../assets/strength.png";
import speed from "../../assets/speed.png";
import durability from "../../assets/durability.png";
import power from "../../assets/power.png";
import combat from "../../assets/combat.png";

function CompleteCard({ oneSuperHero }) {
  return (
    <div className="completeCard">
      <div className="superHeroImg">
        <img src={oneSuperHero.image_md} alt={oneSuperHero.name} />
        <div className="superHeroIdentity">
          <h1 className="superHeroName">{oneSuperHero.name}</h1>
          <h1 className="superHeroRace">{oneSuperHero.race}</h1>
        </div>
      </div>
      <div className="containerInfos">
        <ul>
          <h2>Profile</h2>
          <li>Gender: {oneSuperHero.gender}</li>
          <li>Eye Color: {oneSuperHero.eyecolor}</li>
          <li>Hair Color: {oneSuperHero.haircolor}</li>
          <li>Full Name: {oneSuperHero.fullname}</li>
          <li>Place Of Birth: {oneSuperHero.place_of_birth}</li>
          <li>First Appearance: {oneSuperHero.first_appearance}</li>
          <li>Work: {oneSuperHero.work}</li>
        </ul>
        <ul>
          <h2>Stats</h2>
          <li>
            <img
              src={intelligence}
              alt="intelligence icon"
              className="intelligenceIcon"
            />
            {oneSuperHero.intelligence}
          </li>
          <li>
            <img src={strength} alt="strength icon" className="strengthIcon" />
            {oneSuperHero.strength}
          </li>
          <li>
            <img src={speed} alt="speed icon" className="speedIcon" />
            {oneSuperHero.speed}
          </li>
          <li>
            <img
              src={durability}
              alt="durability icon"
              className="durabilityIcon"
            />
            {oneSuperHero.durability}
          </li>
          <li>
            <img src={power} alt="power icon" className="powerIcon" />{" "}
            {oneSuperHero.power}
          </li>
          <li>
            {" "}
            <img src={combat} alt="combat icon" className="combatIcon" />{" "}
            {oneSuperHero.combat}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CompleteCard;