import "./Cardheros.css";
import { Link, useLoaderData } from "react-router-dom";
import Cards from "../cards/Cards";
import elipseFavorisOk from "../../assets/ellipse-favoris-ok.png";

function Cardheros() {
  const superheros = useLoaderData();

  return (
    <>
      <div className="containerCards">
        {superheros.map((hero) => (
          <Cards key={hero.id} hero={hero} />
        ))}
      </div>
      <button type="button" className="buttonGoFavoris">
        <Link to="/favoris">
          <img src={elipseFavorisOk} alt="ImageFavoris" />
        </Link>
      </button>
    </>
  );
}

export default Cardheros;
