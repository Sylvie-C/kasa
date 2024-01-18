import logo from "../assets/images/logo.svg";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src={logo} className="header__logo" alt="logo" />
      <div>
        <NavLink to="/" className="header__link">Accueil</NavLink>
        <NavLink to="/apropos" className="header__link">A propos</NavLink>
      </div>
    </div>
  );
}

export default Header;
