import "./Favoris.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import SuperheroContext from "../../contexts/SuperheroContext";
import elipseFavorisOk from "../../assets/ellipse-favoris-ok.png";
import elipsePoints from "../../assets/ellipse-points.png";

function Favoris() {
  const { goFavorite } = useContext(SuperheroContext);

  return (
    <div>
      <h1 className="titleFavoris">My favorites superhero</h1>
      <div className="containerCardsFavoris">
        {goFavorite.map((herofav) => (
          <div key={herofav.id} className="cardHero">
            <img
              src={herofav.image_sm}
              alt={herofav.name}
              className="imgCard"
            />
            <div className="containerNameRace">
              <p className="titleName">{herofav.name.toUpperCase()}</p>
              <p className="titleRace">{herofav.race}</p>
            </div>
            <div className="containerButtons buttonNav">
              <button type="button">
                <img src={elipseFavorisOk} alt="Ellipse Favoris" />
              </button>
              <Link to={`/superheros/${herofav.id}`}>
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
