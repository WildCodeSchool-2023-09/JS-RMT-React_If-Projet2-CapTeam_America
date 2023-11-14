import React from "react";
import { Link } from "react-router-dom";

function ButtonNav({ className, linkTo, src, alt, width, height }) {
  return (
    <button type="button" className={className}>
      <Link to={linkTo}>
        <img src={src} alt={alt} width={width} height={height} />
      </Link>
    </button>
  );
}

export default ButtonNav;
