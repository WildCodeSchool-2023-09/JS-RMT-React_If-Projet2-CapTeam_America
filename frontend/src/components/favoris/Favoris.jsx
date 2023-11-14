import "./Favoris.css";
import { useContext } from "react";
import SuperheroContext from "../../contexts/SuperheroContext";
import elipseFavorisOk from "../../assets/ellipse-favoris-ok.png";
import elipsePoints from "../../assets/ellipse-points.png";

function Favoris() {
  const { goFavorite } = useContext(SuperheroContext);

  return (
    <div>
      <h1>Favoris</h1>
      <div className="containerCards">
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
