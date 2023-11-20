import { useLoaderData } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Cards from "../components/cards/Cards";
import ToggleRacePicker from "../components/ToggleRacePicker";
import "./Cardheros.css";

function Cardheros() {
  const superheros = useLoaderData();
  const [filteredHeros, setFilteredHeros] = useState(superheros);
  const [race, setRace] = useState("");
  const [racePicker, setRacePicker] = useState(false);
  const [races, setRaces] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/races`)
      .then((response) => {
        const breeds = response.data.filter(
          (breed) => !(!breed.race || /^\s*$/.test(breed.id))
        );
        breeds.unshift({ race: "" });
        setRaces(breeds);
      })
      .catch((err) => console.error(err));
  }, []);

  const toggleRacePicker = useCallback(() => {
    setRacePicker(!racePicker);
  });

  const filter = useCallback((selectedRace) => {
    setRacePicker(false);
    setRace(selectedRace);

    const query = selectedRace === "_all_" ? "" : `?race=${selectedRace}`;
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/superheros${query}`)
      .then((response) => {
        setFilteredHeros(response.data);
      })
      .catch((err) => console.error(err));
  });

  return (
    <>
      {racePicker && (
        <ToggleRacePicker
          races={races}
          selectedRace={race}
          onToggle={toggleRacePicker}
          onFilter={filter}
        />
      )}
      {/* <h1 className="titleHome">My Superheroes</h1> */}
      <div className="filter">
        <button type="button" onClick={toggleRacePicker}>
          <img src="filter.png" alt="Filter" />
        </button>
      </div>
      <div className="containerCards">
        {filteredHeros.map((hero, index) => (
          <Cards key={hero.id} hero={hero} index={index} />
        ))}
      </div>
    </>
  );
}

export default Cardheros;
