import "./Cards.css";
import { useState, useContext, useEffect } from "react";
import SuperheroContext from "../../contexts/SuperheroContext";
import elipseFist from "../../assets/ellipse-fist.png";
import elipseFavoris from "../../assets/ellipse-favoris.png";
import elipseFavorisOk from "../../assets/ellipse-favoris-ok.png";
import elipsePoints from "../../assets/ellipse-points.png";

function Cards({ hero }) {
  const [isFavorite, setIsFavorite] = useState(`${elipseFavoris}`);
  const { goFavorite, setGoFavorite } = useContext(SuperheroContext);

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
