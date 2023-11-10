import "./App.css";
import { Outlet } from "react-router-dom";
import NavbarBottom from "./components/navbarBottom/NavbarBottom";

function App() {
  return (
    <div className="App">
      <Outlet />
      <NavbarBottom />
    </div>
  );
}

export default App;
