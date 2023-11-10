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
    </div>
  );
}

export default NavbarBottom;
