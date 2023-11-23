import React from "react";
import HeroIdentity from "./HeroIdentity";

function Identity({ oneSuperHero }) {
  return (
    <div>
      <ul>
        <h2>Profile</h2>
        <HeroIdentity title="Gender: " heroInfo={oneSuperHero.gender} />
        <HeroIdentity title="Eye Color: " heroInfo={oneSuperHero.eyecolor} />
        <HeroIdentity title="Hair Color: " heroInfo={oneSuperHero.haircolor} />
        <HeroIdentity title="Full Name: " heroInfo={oneSuperHero.fullname} />
        <HeroIdentity
          title="Place Of Birth: "
          heroInfo={oneSuperHero.place_of_birth}
        />
        <HeroIdentity
          title="First Appearance: "
          heroInfo={oneSuperHero.first_appearance}
        />
        <HeroIdentity title="Work: " heroInfo={oneSuperHero.work} />
      </ul>
    </div>
  );
}

export default Identity;
