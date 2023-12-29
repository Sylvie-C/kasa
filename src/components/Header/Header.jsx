import logo from "../../assets/logo.svg";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <img src={logo} className="Header-logo" alt="logo" />
      <Link to="/" style={{ color: "aqua" }}>
        Accueil
      </Link>
      <Link to="/apropos">À propos</Link>
    </div>
  );
}

export default Header;
