import "./Cardheros.css";
import { useLoaderData } from "react-router-dom";
import Cards from "../cards/Cards";

function Cardheros() {
  const superheros = useLoaderData();
  return (
    <div className="containerCards">
      {superheros.map((hero, index) => (
        <Cards key={hero.id} hero={hero} index={index} />
      ))}
    </div>
  );
}

export default Cardheros;
