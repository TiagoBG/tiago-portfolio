import "./header.css";
import Logo from "../../../public/assets/images/tiagobg-logo-light.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
  const [isToggleDisplayed, setIsToggleDisplayed] = useState(false);
  
  return (
    <header className="main-header">
    <div className={isToggleDisplayed ? `backdrop--active` : `backdrop`} onClick={()=>setIsToggleDisplayed(!isToggleDisplayed)}></div>
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
            <Link to="/projects" className="main-nav__link">Projects</Link>
          </li>
          <li className="main-nav__item">
            <Link to="/contact" className="main-nav__link">Contact</Link>
          </li>
          <li className="main-nav__item--cta">
            <a classhref="#">Download CV</a>
          </li>
        </ul>
      </nav>
      <button className="main-nav__mobile-button" onClick={()=>setIsToggleDisplayed(!isToggleDisplayed)}>
        <GiHamburgerMenu className="main-nav__mobile-btn-icon" />
      </button>
      <nav className={isToggleDisplayed ? `mobile-nav--active` : `mobile-nav`} style={isToggleDisplayed ? {display: "block"} : {display: "none"}}>
        <ul className="mobile-nav__list">
          <li className="mobile-nav__item" onClick={()=>setIsToggleDisplayed(!isToggleDisplayed)}>
            <Link to="/" className="mobile-nav__link">About</Link>
          </li>
          <li className="mobile-nav__item" onClick={()=>setIsToggleDisplayed(!isToggleDisplayed)}>
            <Link to="/projects" className="mobile-nav__link">Projects</Link>
          </li>
          <li className="mobile-nav__item" onClick={()=>setIsToggleDisplayed(!isToggleDisplayed)}>
            <Link to="/contact" className="mobile-nav__link">Contact</Link>
          </li>
          <li className="mobile-nav__item--cta">
            <a classhref="#">Download CV</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
