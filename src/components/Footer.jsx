import logo from "../assets/images/logo-white.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <img src={logo} className="footer__logo" alt="logo" />
        &#x00A9; 2020 Kasa. All rights reserved.
      </div>
    </div>
  );
}
export default Footer;
