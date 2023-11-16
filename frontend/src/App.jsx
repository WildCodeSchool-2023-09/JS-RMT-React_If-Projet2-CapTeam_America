import "./App.css";
import { React, useState } from "react";
import { Outlet } from "react-router-dom";
import NavbarBottom from "./components/navbarBottom/NavbarBottom";
import NavbarDesktop from "./components/navbarDesktop/NavbarDesktop";
import SuperheroContext from "./contexts/SuperheroContext";

function App() {
  const [goFavorite, setGoFavorite] = useState([]);
  const [avatar1, setAvatar1] = useState(0);
  const [avatar2, setAvatar2] = useState(0);

  return (
    <div className="App">
      <NavbarDesktop />
      <SuperheroContext.Provider
        value={{
          goFavorite,
          setGoFavorite,
          avatar1,
          setAvatar1,
          avatar2,
          setAvatar2,
        }}
      >
        <Outlet />
      </SuperheroContext.Provider>
      <NavbarBottom />
    </div>
  );
}

export default App;
