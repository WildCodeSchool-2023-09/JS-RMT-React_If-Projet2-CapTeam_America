import { React, useState, useEffect } from "react";
import axios from "axios";
import { Outlet, useLoaderData } from "react-router-dom";
import Cardheros from "./components/cardheros/Cardheros";
import NavbarBottom from "./components/navbarBottom/NavbarBottom";
import ToggleRacePicker from "./components/ToggleRacePicker";
import NavbarDesktop from "./components/navbarDesktop/NavbarDesktop";
import FooterDesktop from "./components/footerDesktop/FooterDesktop";
import SuperheroContext from "./contexts/SuperheroContext";
import "./App.css";

function App() {
  const superheros = useLoaderData();
  const [filteredHeros, setFilteredHeros] = useState(superheros);
  const [race, setRace] = useState("");
  const [racePicker, setRacePicker] = useState(false);
  const [races, setRaces] = useState([]);
  const [goFavorite, setGoFavorite] = useState([]);

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
  const toggleRacePicker = () => {
    setRacePicker(!racePicker);
  };

  const filter = (selectedRace) => {
    setRacePicker(false);
    setRace(selectedRace);

    if (selectedRace === "_all_") {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/superheros`)
        .then((response) => {
          setFilteredHeros(response.data);
        })
        .catch((err) => console.error(err));
    } else {
      axios
        .get(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/superheros?race=${selectedRace}`
        )
        .then((response) => {
          setFilteredHeros(response.data);
        })
        .catch((err) => console.error(err));
    }
  };

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
         <NavbarDesktop />
    <SuperheroContext.Provider value={{ goFavorite, setGoFavorite }}>
        <Outlet />
      </SuperheroContext.Provider>
      <NavbarBottom />
      <Cardheros superheros={filteredHeros} />
            <FooterDesktop />
            </div>
}

export default App;
