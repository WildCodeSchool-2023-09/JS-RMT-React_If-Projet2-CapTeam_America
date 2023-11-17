// App.jsx

import "./App.css";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Cardheros from "./components/cardheros/Cardheros";
import ToggleRacePicker from "./components/ToggleRacePicker";

function App() {
  const superheros = useLoaderData();
  const [filteredHeros, setFilteredHeros] = useState(superheros);
  const [race, setRace] = useState("");
  const [racePicker, setRacePicker] = useState(false);
  const [races, setRaces] = useState([]);

  useEffect(() => {
    // -- On récupère les races existantes
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

    // Si "Toutes les races" sont sélectionnées, afficher tous les éléments
    const query = selectedRace === "_all_" ? "" : `?race=${selectedRace}`;
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/superheros${query} `)
      .then((response) => {
        setFilteredHeros(response.data);
      })
      .catch((err) => console.error(err));
  });

  return (
    <div className="App">
      {racePicker && (
        <ToggleRacePicker
          races={races}
          selectedRace={race}
          onToggle={toggleRacePicker}
          onFilter={filter}
        />
      )}

      <div className="header">
        <div className="logo">
          <img src="image.png" alt="Logo" className="logo" />
        </div>

        <div className="filter">
          <button type="button" onClick={toggleRacePicker}>
            <img src="filter.png" alt="Filter" />
          </button>
        </div>
      </div>

      <Cardheros superheros={filteredHeros} />
    </div>
  );
}

export default App;
