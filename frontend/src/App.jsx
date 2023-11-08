import "./App.css";
import { useLoaderData } from "react-router-dom";
import Cardheros from "./components/cardheros/Cardheros";

function App() {
  const superheros = useLoaderData();

  return (
    <div className="App">
      <Cardheros superheros={superheros} />
    </div>
  );
}

export default App;
