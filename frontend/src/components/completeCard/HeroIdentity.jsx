import React from "react";

function HeroIdentity({ title, heroInfo }) {
  return (
    <li>
      {title} {heroInfo}
    </li>
  );
}

export default HeroIdentity;
