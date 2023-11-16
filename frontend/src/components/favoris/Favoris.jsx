import "./Favoris.css";
import { useContext } from "react";
import SuperheroContext from "../../contexts/SuperheroContext";
import elipseFavorisOk from "../../assets/ellipse-favoris-ok.png";
import elipsePoints from "../../assets/ellipse-points.png";

function Favoris() {
  const { favories, handleFavories } = useContext(SuperheroContext);

  return (
    <div>
      <h1 className="titleFavoris">My superhero favourites</h1>
      <div className="containerCards">
        {favories.map((hero) => (
          <div key={hero.id} className="cardHero">
            <img src={hero.image_sm} alt={hero.name} className="imgCard" />
            <div className="containerNameRace">
              <p className="titleName">{hero.name.toUpperCase()}</p>
              <p className="titleRace">{hero.race}</p>
            </div>
            <div className="containerButtons buttonNav">
              <button type="button" onClick={() => handleFavories(hero)}>
                <img src={elipseFavorisOk} alt="Ellipse Favoris" />
              </button>
              <button type="button">
                <img src={elipsePoints} alt="Ellipse Points" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favoris;
