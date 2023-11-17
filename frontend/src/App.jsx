import { React, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavbarBottom from "./components/navbarBottom/NavbarBottom";
import NavbarDesktop from "./components/navbarDesktop/NavbarDesktop";
import FooterDesktop from "./components/footerDesktop/FooterDesktop";
import SuperheroContext from "./contexts/SuperheroContext";
import "./App.css";

let start = true;

function App() {
  const [favories, setFavories] = useState([]);
  const [fighters, setFighters] = useState([]);

  const handleFavories = (hero) => {
    if (favories.some((fav) => fav.id === hero.id)) {
      setFavories(() => favories.filter((fav) => fav.id !== hero.id));
    } else {
      setFavories((prev) => [...prev, hero]);
    }
  };

  const handleFighters = (hero) => {
    if (
      !fighters.some((fight) => fight.id === hero.id) &&
      fighters.length < 2
    ) {
      setFighters((prev) => [...prev, hero]);
    } else {
      setFighters(() => fighters.filter((fight) => fight.id !== hero.id));
    }
  };

  useEffect(() => {
    if (start) {
      if (localStorage.getItem("fighters") !== "undefined")
        setFighters(JSON.parse(localStorage.getItem("fighters")) || []);
      if (localStorage.getItem("favoris") !== "undefined")
        setFavories(JSON.parse(localStorage.getItem("favoris")) || []);
      start = false;
    } else {
      localStorage.setItem("favoris", JSON.stringify(favories));
      localStorage.setItem("fighters", JSON.stringify(fighters));
    }
  }, [favories, fighters]);

  return (
    <div className="App">
      <NavbarDesktop />
      <SuperheroContext.Provider
        value={{
          favories,
          handleFavories,
          fighters,
          handleFighters,
        }}
      >
        <Outlet />
      </SuperheroContext.Provider>
      <NavbarBottom />
      <FooterDesktop />
    </div>
  );
}

export default App;
