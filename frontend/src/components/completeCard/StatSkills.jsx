import React from "react";

function StatSkills({ imgSrc, imgAlt, className, skill }) {
  return (
    <li>
      <img src={imgSrc} alt={imgAlt} className={className} />
      {skill}
    </li>
  );
}

export default StatSkills;
