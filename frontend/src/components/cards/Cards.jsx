import "./Cards.css";
import elipsePoing from "../../assets/ellipse-poing.png";
import elipseFavoris from "../../assets/ellipse-favoris.png";
import elipsePoints from "../../assets/ellipse-points.png";

function Cards({ hero }) {
  return (
    <div key={hero.slug} className="cardHero">
      <img src={hero.image_sm} alt={hero.name} className="imgCard" />
      <div className="containerNameRace">
        <p id="titleName">{hero.name.toUpperCase()}</p>
        <p id="titleRace">{hero.race}</p>
      </div>
      <div className="containerButtons">
        <img src={elipseFavoris} alt="Ellipse Favoris" />
        <img src={elipsePoing} alt="Ellipse Poing" id="poing" />
        <img src={elipsePoints} alt="Ellipse Points" />
      </div>
    </div>
  );
}

export default Cards;
