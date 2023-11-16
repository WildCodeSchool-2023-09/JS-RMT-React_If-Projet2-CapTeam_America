import { React, useContext, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import SuperheroContext from "../../contexts/SuperheroContext";
import "./Versus.css";
import drawMatch from "../../assets/draw-match.jpg";
import fight from "../../assets/combat.png";
import durability from "../../assets/durability.png";
import intelligence from "../../assets/intelligence.png";
import power from "../../assets/power.png";
import speed from "../../assets/speed.png";
import strength from "../../assets/strength.png";

let scoreAvat1 = 0;
let scoreAvat2 = 0;
let imageWinner = "";

function Versus() {
  const allSuperHeros = useLoaderData();
  const { avatar1 } = useContext(SuperheroContext);
  const { avatar2 } = useContext(SuperheroContext);
  const [resultat, setResultat] = useState("");

  const hero1 = allSuperHeros[avatar1];
  const hero2 = allSuperHeros[avatar2];

  useEffect(() => {
    scoreAvat1 = 0;
    scoreAvat2 = 0;
  }, []);

  function combat() {
    setResultat("Hello toto");

    const ring = document.querySelector(".ringBack");
    const skills = document.querySelector(".skills");
    document.querySelector(".combattant1Img").className =
      "combattant1Img animeFighter1";
    document.querySelector(".combattant2Img").className =
      "combattant2Img animeFighter2";
    ring.style.visibility = "visible";
    skills.style.visibility = "visible";

    if (hero1.intelligence > hero2.intelligence) {
      scoreAvat1 += 1;
    } else if (hero1.intelligence < hero2.intelligence) {
      scoreAvat2 += 1;
    } else {
      scoreAvat1 += 0;
      scoreAvat2 += 0;
    }

    if (hero1.strength > hero2.strength) {
      scoreAvat1 += 1;
    } else if (hero1.strength < hero2.strength) {
      scoreAvat2 += 1;
    } else {
      scoreAvat1 += 0;
      scoreAvat2 += 0;
    }

    if (hero1.speed > hero2.speed) {
      scoreAvat1 += 1;
    } else if (hero1.speed < hero2.speed) {
      scoreAvat2 += 1;
    } else {
      scoreAvat1 += 0;
      scoreAvat2 += 0;
    }

    if (hero1.durability > hero2.durability) {
      scoreAvat1 += 1;
    } else if (hero1.durability < hero2.durability) {
      scoreAvat2 += 1;
    } else {
      scoreAvat1 += 0;
      scoreAvat2 += 0;
    }

    if (hero1.power > hero2.power) {
      scoreAvat1 += 1;
    } else if (hero1.power < hero2.power) {
      scoreAvat2 += 1;
    } else {
      scoreAvat1 += 0;
      scoreAvat2 += 0;
    }

    if (hero1.combat > hero2.combat) {
      scoreAvat1 += 1;
    } else if (hero1.combat < hero2.combat) {
      scoreAvat2 += 1;
    } else {
      scoreAvat1 += 0;
      scoreAvat2 += 0;
    }

    if (scoreAvat1 > scoreAvat2) {
      setResultat(`The winner is ${hero1.name} !!!`);
      imageWinner = hero1.image_sm;
    } else if (scoreAvat1 < scoreAvat2) {
      setResultat(`The winner is ${hero2.name} !!!`);
      imageWinner = hero2.image_sm;
    } else {
      setResultat("Draw match !!!");
      imageWinner = drawMatch;
    }
  }

  function score() {
    const scoreFinish = document.querySelector(".score");
    scoreFinish.style.visibility = "visible";
    document.querySelector(".scoreAnime").className = "scoreAnime animeResult";
  }

  return (
    <div>
      <h1 className="titleVersus">Versus</h1>
      <div className="combattants">
        <h2>Fighter 1 : {hero1.name}</h2>
        <h2>Fighter 2 : {hero2.name}</h2>
        <button type="button" onClick={combat} className="butn butFight">
          FIGHT!!!
        </button>
      </div>
      <div className="ringBack" style={{ visibility: "hidden" }}>
        <img src={hero1.image_sm} alt="Hero one" className="combattant1Img" />
        <img src={hero2.image_sm} alt="Hero two" className="combattant2Img" />
      </div>
      <div className="skills" style={{ visibility: "hidden" }}>
        <div>
          <p>
            Intelligence <img src={intelligence} alt="Icon intelligence" /> :{" "}
            <strong>{hero1.intelligence}</strong> v/s{" "}
            <strong>{hero2.intelligence}</strong>{" "}
          </p>
          <p>
            Strength <img src={strength} alt="Icon strength" /> :{" "}
            <strong>{hero1.strength}</strong> v/s{" "}
            <strong>{hero2.strength}</strong>
          </p>
          <p>
            Speed <img src={speed} alt="Icon speed" /> :{" "}
            <strong>{hero1.speed}</strong> v/s <strong>{hero2.speed}</strong>
          </p>
          <p>
            Durability <img src={durability} alt="Icon durability" /> :{" "}
            <strong>{hero1.durability}</strong> v/s{" "}
            <strong>{hero2.durability}</strong>{" "}
          </p>
          <p>
            Power <img src={power} alt="Icon power" /> :{" "}
            <strong>{hero1.power}</strong> v/s <strong>{hero2.power}</strong>
          </p>
          <p>
            Fight <img src={fight} alt="Icon fight" /> :{" "}
            <strong>{hero1.combat}</strong> v/s <strong>{hero2.combat}</strong>
          </p>
        </div>
        <button type="button" onClick={score} className="butn butResult">
          RESULT !!!
        </button>
        <div className="score scoreAnime" style={{ visibility: "hidden" }}>
          <h2>
            Score {hero1.name} : {scoreAvat1}
          </h2>
          <h2>
            Score {hero2.name} : {scoreAvat2}
          </h2>
          <h2>{resultat.toUpperCase()}</h2>
          <div className="containImgWinner">
            <img src={imageWinner} alt="The winner" className="imgWinner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Versus;
