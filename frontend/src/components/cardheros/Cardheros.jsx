import "./Cardheros.css";
import Cards from "../cards/Cards";

function Cardheros({ superheros }) {
  const count = window.innerWidth > 765 ? 8 : 4;

  return (
    <div className="containerCards">
      {superheros
        .filter((hero) => hero.id <= count)
        .map((hero) => (
          <Cards hero={hero} />
        ))}
    </div>
  );
}

export default Cardheros;
