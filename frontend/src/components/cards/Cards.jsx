import "./Cards.css";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import SuperheroContext from "../../contexts/SuperheroContext";
import elipseFist from "../../assets/ellipse-fist.png";
import elipseFavoris from "../../assets/ellipse-favoris.png";
import elipseFavorisOk from "../../assets/ellipse-favoris-ok.png";
import elipsePoints from "../../assets/ellipse-points.png";
import fightOk from "../../assets/fightOk.png";

let combattant1 = false;
let combattant2 = false;

function Cards({ hero, index }) {
  const [isFavorite, setIsFavorite] = useState(`${elipseFavoris}`);
  const [isFight, setIsFight] = useState(elipseFist);
  const { goFavorite, setGoFavorite } = useContext(SuperheroContext);
  const { avatar1, setAvatar1 } = useContext(SuperheroContext);
  const { avatar2, setAvatar2 } = useContext(SuperheroContext);

  useEffect(() => {
    combattant1 = false;
    combattant2 = false;
    setIsFight(elipseFist);
  }, []);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoris"));

    if (
      storedFavorites &&
      storedFavorites.filter((favoriteHero) => favoriteHero.id === hero.id)
        .length
    ) {
      setGoFavorite(storedFavorites);
      setIsFavorite(`${elipseFavorisOk}`);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favoris", JSON.stringify(goFavorite));
  }, [goFavorite]);

  function goToFavorite() {
    const isHeroFavorite = goFavorite.some(
      (favoriteHero) => favoriteHero.id === hero.id
    );
    if (isHeroFavorite) {
      setIsFavorite(`${elipseFavoris}`);
      setGoFavorite(
        goFavorite.filter((heroToDelete) => heroToDelete.id !== hero.id)
      );
    } else {
      setIsFavorite(`${elipseFavorisOk}`);
      setGoFavorite([...goFavorite, hero]);
    }
  }

  function combatants(heroIndex) {
    if (combattant1 === false) {
      setAvatar1(heroIndex);
      setIsFight(fightOk);
      combattant1 = true;
    } else if (combattant2 === false && heroIndex !== avatar1) {
      setAvatar2(heroIndex);
      setIsFight(fightOk);
      combattant2 = true;
    } else if (avatar1 === heroIndex && combattant1 === true) {
      setAvatar1(0);
      setIsFight(elipseFist);
      combattant1 = false;
    } else if (avatar2 === heroIndex && combattant2 === true) {
      setAvatar2(0);
      setIsFight(elipseFist);
      combattant2 = false;
    }
  }

  return (
    <div
      className="cardHero"
      onClick={() => combatants(index)}
      role="presentation"
    >
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
          <img src={isFight} alt="Ellipse Fist" className="fist" />
        </button>
        <Link to={`/superheros/${hero.id}`}>
          <img src={elipsePoints} alt="Ellipse Points" />
        </Link>
      </div>
    </div>
  );
}

export default Cards;
