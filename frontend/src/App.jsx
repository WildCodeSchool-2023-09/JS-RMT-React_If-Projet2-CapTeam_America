import axios from "axios";
import { useState } from "react";
import "./App.css";
import Cardheros from "./components/cardheros/Cardheros";

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
      <Cardheros superheros={superheros} />
    </div>
  );
}

export default App;
