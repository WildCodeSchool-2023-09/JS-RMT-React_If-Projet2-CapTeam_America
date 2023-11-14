import "./App.css";
import { Outlet } from "react-router-dom";
import NavbarBottom from "./components/navbarBottom/NavbarBottom";
import NavbarDesktop from "./components/navbarDesktop/NavbarDesktop";

function App() {
  return (
    <div className="App">
      <NavbarDesktop />
      <Outlet />
      <NavbarBottom />
    </div>
  );
}

export default App;
