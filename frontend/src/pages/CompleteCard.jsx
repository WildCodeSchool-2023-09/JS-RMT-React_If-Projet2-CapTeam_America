import React from "react";
import CardMobile from "../components/completeCard/CardMobile";
import CardDesktop from "../components/completeCard/CardDesktop";

function CompleteCard() {
  const display = window.innerWidth > 765;
  return <div>{display ? <CardDesktop /> : <CardMobile />}</div>;
}

export default CompleteCard;
