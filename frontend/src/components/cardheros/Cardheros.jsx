import "./Cardheros.css";
import Cards from "../cards/Cards";

function Cardheros({ superheros }) {
  if (!superheros) {
    return null;
  }

  return (
    <div className="containerCards">
      {superheros.map((hero) => (
        <Cards key={hero.id} hero={hero} />
      ))}
    </div>
  );
}

export default Cardheros;
