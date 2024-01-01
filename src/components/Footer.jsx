import logo from "../assets/images/logo-white.svg";

function Footer() {
  return (
    <div className="footer">
      <img src={logo} className="footer__logo" alt="logo" />
      &#x00A9; 2020 Kasa. All rights reserved.
    </div>
  );
}
export default Footer;
