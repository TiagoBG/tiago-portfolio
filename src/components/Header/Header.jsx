import "./header.css";
import Logo from "../../../public/assets/images/tiagobg-logo-light.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  return (
    <header className="main-header">
      <div>
        <Link to="/" className="main-header__link">
          <img
            src={Logo}
            alt="tiagobg-developer"
            className="main-header__logo"
          />
        </Link>
      </div>
      {isDesktop ? <nav className="main-nav">
        <ul className="main-nav__list">
          <li className="main-nav__item">
          <Link to="/case-studies"></Link>About</li>
          <li className="main-nav__item">
            <Link to="/case-studies">Case Studies</Link>
          </li>
          <li className="main-nav__item">Testimonials</li>
          <li className="main-nav__item">Contact</li>
          <li className="main-nav__item--cta">
            <a classhref="#">Download CV</a>
          </li>
        </ul>
      </nav> : <button>Hamburgueer</button>}
    </header>
  );
};

export default Header;
