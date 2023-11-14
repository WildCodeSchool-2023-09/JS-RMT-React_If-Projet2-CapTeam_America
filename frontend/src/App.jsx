import "./App.css";
import { React, useState } from "react";
import { Outlet } from "react-router-dom";
import NavbarBottom from "./components/navbarBottom/NavbarBottom";
import SuperheroContext from "./contexts/SuperheroContext";

function App() {
  const [goFavorite, setGoFavorite] = useState([]);
  return (
    <div className="App">
      <SuperheroContext.Provider value={{ goFavorite, setGoFavorite }}>
        <Outlet />
      </SuperheroContext.Provider>
      <NavbarBottom />
    </div>
  );
}

export default App;
