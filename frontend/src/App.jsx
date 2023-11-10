import "./App.css";
import { React, useState } from "react";
import { Outlet } from "react-router-dom";
import SuperheroContext from "./contexts/SuperheroContext";

function App() {
  const [goFavorite, setGoFavorite] = useState([]);

  return (
    <div className="App">
      <SuperheroContext.Provider value={{ goFavorite, setGoFavorite }}>
        <Outlet />
      </SuperheroContext.Provider>
    </div>
  );
}

export default App;
