import "./NavbarBottom.css";
import home from "../../assets/home.png";
import ButtonNav from "./ButtonNav";

function NavbarBottom() {
  return (
    <div className="bottomNav">
      <ButtonNav
        className="home"
        LinkTo="/"
        src={home}
        alt="home"
        width={30}
        height={30}
      />

      {/* <button type="button" className="favorite">
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
      </button> */}
    </div>
  );
}

export default NavbarBottom;
