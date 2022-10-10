import './header.css';
import Logo from '../../../public/assets/images/tiagobg-logo-light.png';

const Header = () => {
    return (
        <header className='main-header'>
            <div>
                <a href='' className='main-header__link'>
                    <img src={Logo} alt='tiagobg-developer' className='main-header__logo'/>
                </a>
            </div>
            <nav className='main-nav'>
                <ul className='main-nav__list'>
                    <li className="main-nav__item">About</li>
                    <li className="main-nav__item">Case Studies</li>
                    <li className="main-nav__item">Testimonials</li>
                    <li className="main-nav__item">Contact</li>
                    <li className="main-nav__item--cta">
                        <a classhref="#">Download CV</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
