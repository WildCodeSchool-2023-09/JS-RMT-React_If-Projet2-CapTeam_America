import "./Cards.css";
import elipseFist from "../../assets/ellipse-fist.png";
import elipseFavoris from "../../assets/ellipse-favoris.png";
import elipsePoints from "../../assets/ellipse-points.png";
import CompleteCard from "../completeCard/completeCardMobile";

function Cards({ hero }) {
  return (
    <div className="cardHero">
      <img src={hero.image_sm} alt={hero.name} className="imgCard" />
      <div className="containerNameRace">
        <p className="titleName">{hero.name.toUpperCase()}</p>
        <p className="titleRace">{hero.race}</p>
      </div>
      <div className="containerButtons">
        <button type="button">
          <img src={elipseFavoris} alt="Ellipse Favoris" />
        </button>
        <button type="button" className="buttonFist">
          <img src={elipseFist} alt="Ellipse Fist" className="fist" />
        </button>
        <button type="button" onClick={<CompleteCard heroId={hero.id} />}>
          <img src={elipsePoints} alt="Ellipse Points" />
        </button>
      </div>
    </div>
  );
}

export default Cards;
