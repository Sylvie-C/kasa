import logo from '../assets/logo.svg';
// import './styles/_header.scss';

function Header() {
  return (
    <div className="Header">
        <img src={logo} className="Header-logo" alt="logo" />
    </div>
  );
}

export default Header;
