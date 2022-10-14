import "./header.css";
import Logo from "../../../public/assets/images/tiagobg-logo-light.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
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
      <nav className="main-nav">
        <ul className="main-nav__list">
          <li className="main-nav__item">
            <Link to="/" className="main-nav__link">About</Link>
          </li>
          <li className="main-nav__item">
            <Link to="/case-studies" className="main-nav__link">Case Studies</Link>
          </li>
          <li className="main-nav__item">Testimonials</li>
          <li className="main-nav__item">
            <Link to="/contact-me" className="main-nav__link">Contact</Link>
          </li>
          <li className="main-nav__item--cta">
            <a classhref="#">Download CV</a>
          </li>
        </ul>
      </nav>
      <button className="main-nav__mobile-button">
        <GiHamburgerMenu className="main-nav__mobile-btn-icon" />
      </button>
    </header>
  );
};

export default Header;
