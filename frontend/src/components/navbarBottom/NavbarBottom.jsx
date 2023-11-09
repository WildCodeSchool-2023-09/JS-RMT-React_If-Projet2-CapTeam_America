import "./NavbarBottom.css";
import { Link } from "react-router-dom";
import versus from "../../assets/versus.png";
import contact from "../../assets/contact.png";
import home from "../../assets/home.png";
import notFavorite from "../../assets/not-favorite.png";

function NavbarBottom() {
  return (
    <div className="bottomNav">
      <button type="button" className="home">
        <Link to="/">
          <img src={home} alt="home" width={30} height={30} />
        </Link>
      </button>

      <button type="button" className="favorite">
        <Link to="/Favoris">
          <img src={notFavorite} alt="favorite" height={27} width={27} />
        </Link>
      </button>

      <button type="button" className="contact">
        <Link to="/Contact">
          <img src={contact} alt="contact" width={40} height={40} />
        </Link>
      </button>

      <button type="button" className="versus">
        <Link to="/Versus">
          <img src={versus} alt="versus" width={45} height={45} />
        </Link>
      </button>
    </div>
  );
}

export default NavbarBottom;
