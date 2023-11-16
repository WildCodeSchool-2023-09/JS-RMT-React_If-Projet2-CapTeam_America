import React from "react";
import StatSkills from "./StatSkills";
import intelligence from "../../assets/intelligence.png";
import strength from "../../assets/strength.png";
import speed from "../../assets/speed.png";
import durability from "../../assets/durability.png";
import power from "../../assets/power.png";
import combat from "../../assets/combat.png";

function Stats({ oneSuperHero }) {
  return (
    <div>
      <ul>
        <h2>Stats</h2>
        <div className="icons">
          <StatSkills
            imgSrc={intelligence}
            imgAlt="intelligence icon"
            className="intelligenceIcon"
            skill={oneSuperHero.intelligence}
          />
          <StatSkills
            imgSrc={strength}
            imgAlt="strength icon"
            className="strengthIcon"
            skill={oneSuperHero.strength}
          />
          <StatSkills
            imgSrc={speed}
            imgAlt="speed icon"
            className="speedIcon"
            skill={oneSuperHero.speed}
          />
          <StatSkills
            imgSrc={durability}
            imgAlt="durability icon"
            className="durabilityIcon"
            skill={oneSuperHero.durability}
          />
          <StatSkills
            imgSrc={power}
            imgAlt="power icon"
            className="powerIcon"
            skill={oneSuperHero.power}
          />
          <StatSkills
            imgSrc={combat}
            imgAlt="combat icon"
            className="combatIcon"
            skill={oneSuperHero.combat}
          />
        </div>
      </ul>
    </div>
  );
}

export default Stats;
