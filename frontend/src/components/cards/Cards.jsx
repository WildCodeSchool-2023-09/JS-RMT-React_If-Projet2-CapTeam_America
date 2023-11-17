import { Link } from "react-router-dom";
import { useContext } from "react";
import SuperheroContext from "../../contexts/SuperheroContext";
import "./Cards.css";
import elipseFist from "../../assets/ellipse-fist.png";
import elipseFavoris from "../../assets/ellipse-favoris.png";
import elipseFavorisOk from "../../assets/ellipse-favoris-ok.png";
import elipsePoints from "../../assets/ellipse-points.png";
import fightOk from "../../assets/fightOk.png";

function Cards({ hero }) {
  const { favories, handleFavories, fighters, handleFighters } =
    useContext(SuperheroContext);

  return (
    <div className="cardHero" role="presentation">
      <img src={hero.image_sm} alt={hero.name} className="imgCard" />
      <div className="containerNameRace">
        <p className="titleName">{hero.name}</p>
        <p className="titleRace">{hero.race}</p>
      </div>
      <div className="containerButtons">
        <button type="button" onClick={() => handleFavories(hero)}>
          <img
            src={
              favories.some((fav) => fav.id === hero.id)
                ? elipseFavorisOk
                : elipseFavoris
            }
            alt="Ellipse Favoris"
          />
        </button>
        <button
          type="button"
          className="buttonFist"
          onClick={() => handleFighters(hero)}
        >
          <img
            src={
              fighters.some((fight) => fight.id === hero.id)
                ? fightOk
                : elipseFist
            }
            alt="Ellipse Fist"
            className="fist"
          />
        </button>
        <Link to={`/superheros/${hero.id}`}>
          <img src={elipsePoints} alt="Ellipse Points" />
        </Link>
      </div>
    </div>
  );
}

export default Cards;
