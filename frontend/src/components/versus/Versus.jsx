import { React, useContext, useState } from "react";

import SuperheroContext from "../../contexts/SuperheroContext";
import "./Versus.css";
import drawMatch from "../../assets/draw-match.jpg";
import fight from "../../assets/combat.png";
import durability from "../../assets/durability.png";
import intelligence from "../../assets/intelligence.png";
import power from "../../assets/power.png";
import speed from "../../assets/speed.png";
import strength from "../../assets/strength.png";

function Versus() {
  const { fighters } = useContext(SuperheroContext);
  const [displayRing, setDisplayRing] = useState(false);
  const [displayResult, setDisplayResult] = useState(false);
  const [score, setScore] = useState([]);

  const calculScore = () => {
    setDisplayResult(!displayResult);

    let scoreAvat1 = 0;
    let scoreAvat2 = 0;
    Object.keys(fighters[0]).forEach((props) => {
      if (typeof fighters[0][props] === "number" && props !== "id") {
        if (fighters[0][props] > fighters[1][props]) {
          scoreAvat1 += 1;
        } else if (fighters[0][props] < fighters[1][props]) {
          scoreAvat2 += 1;
        }
      }
    });
    setScore([scoreAvat1, scoreAvat2]);
  };

  const getResult = () => {
    if (score[0] > score[1]) {
      return `The winner is ${fighters[0].name} !!!`;
    }
    if (score[0] < score[1]) {
      return `The winner is ${fighters[1].name} !!!`;
    }
    return "Draw match !!!";
  };

  const getResultImage = () => {
    if (score[0] > score[1]) {
      return fighters[0].image_sm;
    }
    if (score[0] < score[1]) {
      return fighters[1].image_sm;
    }
    return drawMatch;
  };

  return (
    <div>
      <h1 className="titleVersus">Versus</h1>
      {fighters.length === 2 ? (
        <>
          <div className="fighter">
            <h2>Fighter 1 : {fighters[0].name}</h2>
            <h2>Fighter 2 : {fighters[1].name}</h2>
            <button
              type="button"
              onClick={() => setDisplayRing(!displayRing)}
              className="butn butFight"
            >
              FIGHT!!!
            </button>
          </div>
          {displayRing && (
            <div>
              <div className="ringBack">
                <img
                  src={fighters[0].image_sm}
                  alt="Hero one"
                  className="fighter1Img animeFighter1"
                />
                <img
                  src={fighters[1].image_sm}
                  alt="Hero two"
                  className="fighter2Img animeFighter2"
                />
              </div>
              <div className="skills">
                <div>
                  <p>
                    Intelligence{" "}
                    <img src={intelligence} alt="Icon intelligence" /> :{" "}
                    <strong>{fighters[0].intelligence}</strong> v/s{" "}
                    <strong>{fighters[1].intelligence}</strong>{" "}
                  </p>
                  <p>
                    Strength <img src={strength} alt="Icon strength" /> :{" "}
                    <strong>{fighters[0].strength}</strong> v/s{" "}
                    <strong>{fighters[1].strength}</strong>
                  </p>
                  <p>
                    Speed <img src={speed} alt="Icon speed" /> :{" "}
                    <strong>{fighters[0].speed}</strong> v/s{" "}
                    <strong>{fighters[1].speed}</strong>
                  </p>
                  <p>
                    Durability <img src={durability} alt="Icon durability" /> :{" "}
                    <strong>{fighters[0].durability}</strong> v/s{" "}
                    <strong>{fighters[1].durability}</strong>{" "}
                  </p>
                  <p>
                    Power <img src={power} alt="Icon power" /> :{" "}
                    <strong>{fighters[0].power}</strong> v/s{" "}
                    <strong>{fighters[1].power}</strong>
                  </p>
                  <p>
                    Fight <img src={fight} alt="Icon fight" /> :{" "}
                    <strong>{fighters[0].combat}</strong> v/s{" "}
                    <strong>{fighters[1].combat}</strong>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={calculScore}
                  className="butn butResult"
                >
                  RESULT !!!
                </button>
                {displayResult && (
                  <div className="score scoreAnime animeResult">
                    <h2>
                      Score {fighters[0].name} : {score[0]}
                    </h2>
                    <h2>
                      Score {fighters[1].name} : {score[1]}
                    </h2>
                    <h2>{getResult()}</h2>
                    <div className="containImgWinner">
                      <img
                        src={getResultImage()}
                        alt="The winner"
                        className="imgWinner"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      ) : (
        <h3>Choose two heroes</h3>
      )}
    </div>
  );
}

export default Versus;
