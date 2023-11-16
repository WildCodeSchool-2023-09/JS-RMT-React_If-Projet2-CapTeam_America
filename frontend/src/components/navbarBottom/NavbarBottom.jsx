import "./NavbarBottom.css";
import home from "../../assets/home.png";
import favoris from "../../assets/not-favorite.png";
import contact from "../../assets/contact.png";
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
        linkTo="/favorites"
        src={favoris}
        alt="favorite"
        width={27}
        height={27}
      />
      <ButtonNav
        className="contact"
        linkTo="/contact"
        src={contact}
        alt="contact"
        width={40}
        height={40}
      />
    </div>
  );
}

export default NavbarBottom;
