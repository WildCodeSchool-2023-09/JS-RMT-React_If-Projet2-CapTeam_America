import "./Favoris.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import SuperheroContext from "../../contexts/SuperheroContext";
import elipseFavorisOk from "../../assets/ellipse-favoris-ok.png";
import elipsePoints from "../../assets/ellipse-points.png";

function Favoris() {
  const { favories, handleFavories } = useContext(SuperheroContext);
  return (
    <div>
      <h2 className="titleFavoris">
        My favorites
        <br />
        superheroes
      </h2>
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
              <Link to={`/superheros/${hero.id}`}>
                <img src={elipsePoints} alt="Ellipse Points" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favoris;
