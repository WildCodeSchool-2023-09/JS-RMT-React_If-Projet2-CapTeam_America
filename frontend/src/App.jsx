import axios from "axios";
import Counter from "./components/Counter";
import logo from "./assets/logo.svg";

import "./App.css";

function App() {
  const getAllItems = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/superhero`)
      .then((response) => console.info(response))
      .catch((err) => console.error(err));
  };
  getAllItems();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React !</p>

        <Counter />

        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
