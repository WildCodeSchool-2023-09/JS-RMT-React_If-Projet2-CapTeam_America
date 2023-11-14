import "./NavbarBottom.css";
import home from "../../assets/home.png";
import favoris from "../../assets/not-favorite.png";
import ButtonNav from "./ButtonNav";

function NavbarBottom() {
  return (
    <div className="bottomNav">
      <ButtonNav
        className="home"
        linkTo="/"
        src={home}
        alt="home"
        width={30}
        height={30}
      />
      <ButtonNav
        className="favorite"
        linkTo="/favourites"
        src={favoris}
        alt="favorite"
        width={27}
        height={27}
      />
    </div>
  );
}

export default NavbarBottom;
