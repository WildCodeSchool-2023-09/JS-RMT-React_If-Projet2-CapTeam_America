import "./Cardheros.css";
import Cards from "../cards/Cards";

function Cardheros({ superheros }) {
  return (
    <div className="containerCards">
      {superheros.map((hero) => (
        <Cards key={hero.slug} hero={hero} />
      ))}
    </div>
  );
}

export default Cardheros;
