import axios from "axios";
import { useState } from "react";

import "./App.css";

function App() {
  const [superheros, setSuperHeros] = useState([]);

  const getAllSuperheros = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/superheros`)
      .then((response) => setSuperHeros(response.data[0]))
      .catch((err) => console.error(err));
  };
  getAllSuperheros();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Super Heros</h1>
        {superheros.map((hero) => (
          <div key={hero.name}>
            <img src={hero.image_sm} alt={hero.name} />
            <h2>{hero.name}</h2>
            <p>{hero.race}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
