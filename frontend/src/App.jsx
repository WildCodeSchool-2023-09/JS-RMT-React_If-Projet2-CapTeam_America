import { Outlet } from "react-router-dom";
import NavbarBottom from "./components/navbarBottom/NavbarBottom";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <div className="App">
     const superheros = useLoaderData();
  const [filteredHeros, setFilteredHeros] = useState(superheros);
  const [race, setRace] = useState(0);
  const [racePicker, setRacePicker] = useState(false);
  const [races, setRaces] = useState([]);

  useEffect(() => {
    // -- On récupere les races existantes
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

  function toggleRacePicker(e) {
    e.preventDefault();
    setRacePicker(!racePicker);
  }

  function filter(e) {
    e.preventDefault();
    setRacePicker(false);
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/superheros?race=${race}`)
      .then((response) => {
        setFilteredHeros(response.data);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="App">
      {racePicker === true && (
        <div className="race-picker">
          <label htmlFor="race">Sélectionner la race</label>
          <select
            name="race"
            defaultValue={race}
            onChange={(e) => setRace(e.target.value)}
          >
            {races.map((breed) => {
              if (breed.race === "") {
                return (
                  <option key="all" value="">
                    Toutes les races
                  </option>
                );
              }
              return (
                <option key={breed.race} value={breed.race}>
                  {breed.race}
                </option>
              );
            })}
          </select>
          <button type="button" onClick={filter}>
            Filtrer
          </button>
        </div>
      )}

      <div className="header">
        <div className="logo">
          <img src="image.png" alt="Logo" />
        </div>

        <div className="filter">
          <button type="button" onClick={toggleRacePicker}>
            <img src="filter.png" alt="Filter" />
          </button>
        </div>
      </div>
      <Outlet />
      <NavbarBottom />

    </div>
  );
}

export default App;
