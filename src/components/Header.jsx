import logo from "../assets/images/logo.svg";

import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src={logo} className="header__logo" alt="logo" />

      <NavLink className="header__navlink">
        <Link to="/" className="header__link">
          Accueil
        </Link>
        <Link to="/apropos" className="header__link">
          À propos
        </Link>
      </NavLink>
    </div>
  );
}

export default Header;
