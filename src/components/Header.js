import logo from '../assets/logo.svg';
import '../styles/Header.css';

function Header() {
  return (
    <div className="Header">
        <img src={logo} className="Header-logo" alt="logo" />
        <p>TEST POUR VOIR</p>
    </div>
  );
}

export default Header;
