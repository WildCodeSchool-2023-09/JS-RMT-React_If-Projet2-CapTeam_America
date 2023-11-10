import React from "react";
import CompleteCardMobile from "../components/completeCard/CompleteCardMobile";
import CompleteCardDesktop from "../components/completeCard/CompleteCardDesktop";

function CompleteCard() {
  const display = window.innerWidth > 765;
  return (
    <div>{display ? <CompleteCardDesktop /> : <CompleteCardMobile />}</div>
  );
}

export default CompleteCard;
