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
      <Link to="/favorites" className="desktopNav">
        Favourites
      </Link>
      <Link to="/versus" className="desktopNav">
        Versus
      </Link>
      <Link to="/contact" className="desktopNav">
        Contact
      </Link>
    </div>
  );
}

export default NavbarDesktop;
