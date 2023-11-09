import "./Cards.css";
import { useState } from "react";
import elipseFist from "../../assets/ellipse-fist.png";
import elipseFavoris from "../../assets/ellipse-favoris.png";
import elipseFavorisOk from "../../assets/ellipse-favoris-ok.png";
import elipsePoints from "../../assets/ellipse-points.png";

function Cards({ hero }) {
  const [isFavorite, setIsFavorite] = useState(`${elipseFavoris}`);

  function goToFavorite() {
    if (isFavorite === `${elipseFavoris}`) {
      setIsFavorite(`${elipseFavorisOk}`);
    } else {
      setIsFavorite(`${elipseFavoris}`);
    }
  }

  return (
    <div className="cardHero">
      <img src={hero.image_sm} alt={hero.name} className="imgCard" />
      <div className="containerNameRace">
        <p className="titleName">{hero.name.toUpperCase()}</p>
        <p className="titleRace">{hero.race}</p>
      </div>
      <div className="containerButtons">
        <button type="button" onClick={goToFavorite}>
          <img src={isFavorite} alt="Ellipse Favoris" />
        </button>
        <button type="button" className="buttonFist">
          <img src={elipseFist} alt="Ellipse Fist" className="fist" />
        </button>
        <button type="button">
          <img src={elipsePoints} alt="Ellipse Points" />
        </button>
      </div>
    </div>
  );
}

export default Cards;
