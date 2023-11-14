import "./NavbarDesktop.css";
import { Link } from "react-router-dom";
import logoSuperHero from "../../assets/logoSuperHero.png";

function NavbarDesktop() {
  return (
    <div className="navBar">
      <img
        className="logo"
        src={logoSuperHero}
        alt="ceci est le logo de la page"
        width={180}
      />
      <Link to="/" className="desktopNav">
        Home
      </Link>
      <Link to="/favourites" className="desktopNav">
        Favourites
      </Link>
    </div>
  );
}

export default NavbarDesktop;
