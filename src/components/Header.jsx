import logo from "../assets/images/logo.svg";

import { Link , NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/"><img src={logo} className="header__logo" alt="logo" /></Link>
      <div>
        <NavLink to="/" className="header__link">Accueil</NavLink>
        <NavLink to="/apropos" className="header__link">A propos</NavLink>
      </div>
    </div>
  );
}

export default Header;
