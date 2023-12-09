import { IoMdClose } from 'react-icons/io';
import { FaTiktok } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Mobile({ setisMobile, isMobile }) {
  return (
    <div
      className={
        !isMobile
          ? 'menu-container js-menu-container'
          : 'menu-container js-menu-container is-open'
      }
      id="mobile-menu"
    >
      <button
        className="menu-toggle mobile-close-btn"
        onClick={() => setisMobile(false)}
      >
        <IoMdClose className="mobile-close-btn-icon" />
      </button>

      <div className="mobile-menu">
        <nav className="mobile-navigation">
          <ul className="mobile-navigation-list">
            <li className="mobile-navigation-link">
              <Link
                to="/tech-project/"
                end="true"
                className="nav-link"
                onClick={() => setisMobile(false)}
              >
                Головна
              </Link>
            </li>
            <li className="mobile-navigation-link">
              <Link
                to="/tech-project/catalog"
                end="true"
                className="nav-link"
                onClick={() => setisMobile(false)}
              >
                Каталог
              </Link>
            </li>
            <li className="mobile-navigation-link contacts">
              <div className="nav-link">Контакти</div>
            </li>
          </ul>
        </nav>

        <address>
          <ul className="mobile-adress-list">
            <li className="mobile-adress-item">
              <a href="tel:+110001111111" className="mobile-adress-link">
                +11 (000) 111-11-11
              </a>
            </li>
            <li className="mobile-adress-item">
              <a
                href="mailto:info@devstudio.com"
                className="mobile-adress-link"
              >
                info@devstudio.com
              </a>
            </li>
          </ul>
        </address>
        <ul className="mobile-social-list">
          <li className="mobile-social-list-item">
            <a
              href="https://www.instagram.com/?hl=en"
              className="mobile-social-list-link"
            >
              <IoLogoInstagram className="mobile-social-list-icon" />
            </a>
          </li>
          <li className="mobile-social-list-item">
            <a
              href="https://www.tiktok.com/"
              className="mobile-social-list-link"
            >
              <FaTiktok className="mobile-social-list-icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
