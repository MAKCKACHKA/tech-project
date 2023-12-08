import React from 'react';

// import '../../images/icons.svg';
import { FaTiktok } from 'react-icons/fa';
// import { IoMenuSharp } from 'react-icons/io5';
import { IoLogoInstagram } from 'react-icons/io5';
import { FiShoppingCart } from 'react-icons/fi';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import css from './wrapper.module.css';

import ScrollUp from '../ScrollUp/ScrollUp';
// import Mobile from '../Mobile/Mobile-menu.jsx';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1125 1006" {...props}>
    <path d="m820 353-1 2a1609 1609 0 0 0 36 89c0 2-1 3-4 5l-10 6-8 5-22-22-23-21c-4 1-2 5 20 26 15 15 21 22 20 23l-4 5-6 10c-2 4-3 6-5 6l-28-10-44-18-18-8-2 2c-4 5-6 5-27 6h-19v-37h20c23 0 23 0 27 7l2 3v-19l-54 1-94 1h-39l2 4c3 6 4 14 4 42 0 32-1 49-5 58l10 1c9 0 10 0 10-2-3-7-4-87-2-97 1-4 1-3 1 2v6l2-2c3-1 7-2 26-3h15v42c-1 39-1 42-3 47-2 7-3 7 11 6h9l-1-3c-1-8-2-25-2-57v-35h17c14 1 17 1 21 3l4 2v-15l2 3c5 6 5 11 5 47 0 33 0 42-4 53v2h34c29 0 34 0 34-2l162-1 162-1c2-4 1-4-37-4-32 0-37 0-38-2l-2-3-2-6c-1-5-1-5 1-7a2131 2131 0 0 0 90-40c1-5-3-3-71 26l-22 8c-1 0-3-2-4-5l-7-10-4-7 19-21c14-13 19-19 19-20l-2-2-21 19-20 19-8-5-10-6-5-4 18-45 18-46c0-2-2-2-3-1l-14 31-24 58h-7l-11-3c-11-1-10 1-10-31-1-28-1-29-3-29l-2 29-1 30h-5l-13 3c-5 1-8 2-9 1l-32-76c-5-12-7-14-9-13zm-58 119c43 18 48 20 48 23 1 3-1 14-3 15l-40 1h-39v-4c1-4 1-4-1-2-4 5-14 7-36 7h-16v-45h20c19 0 21 1 23 2l2 2v-16l3 1 39 16zm-527-60c12 8 18 16 28 37a2237 2237 0 0 0 32 69c0 2 0 2 8 2h8v-4c1-6 32-92 35-98l2-3h-9c-8 0-9 0-8 2 2 2 2 11-1 19l-25 70c0 1-14-24-28-53l-14-27c-8-10-19-16-29-18h-5l6 4zm-102 3H98l2 3c5 6 6 11 6 45 0 33-1 44-4 53l-2 4h10c10 0 10 0 9-2l-1-26v-24h22c19 0 22 1 24 2l2 2 1-9v-8l-4 2c-3 2-5 2-24 3h-21v-37h21c23 0 25 0 29 6l2 3v-9l-1-9-36 1zm72 3c2 4 1 12-6 33-11 32-21 55-28 64l-3 5h15l2-7 6-16 4-9 16-1 16-1a878 878 0 0 1 15 44c3 5 9 8 17 8h6l-4-3c-5-5-9-13-15-31l-16-48-10-36v-5h-17l2 3zm12 37 6 20-12 1h-13l5-14 6-20 3-7 5 20zm169-38c-18 4-33 19-38 37-2 6-1 21 1 28 4 14 15 27 27 33 20 9 42 5 57-10 16-16 20-40 11-61-5-8-14-19-23-23-10-6-24-7-36-4zm24 6c9 5 18 17 22 29l1 16c0 15-4 26-13 35-7 8-12 10-21 11-7 0-8 0-14-2-13-7-24-26-24-44 0-20 11-40 26-46 6-2 17-1 22 1z" />
    <path d="m453 419 3 8a349 349 0 0 1-4 90l-1 3h19v-26c0-25 0-26 2-26l33 33c25 27 31 33 35 35 5 2 9 2 13 1l2-1-4-2-35-35-32-32h6c8 0 13-2 19-8 12-14 7-36-11-42-3-2-9-2-26-2h-22l2 4zm38 3c10 3 15 17 9 28-4 7-10 10-23 10h-7v-39h8l13 1z" />
    <path d="M559 530c2 4 0 12-8 35-11 32-19 51-25 58l-3 4h7l7-1 3-7 6-16 3-8h31l1 6c10 32 11 35 15 38 4 4 9 6 16 6h4l-4-5c-6-6-8-10-15-32a8405 8405 0 0 0-24-77v-4h-16l2 3zm12 36 5 19h-12l-12-1 6-19 7-18 6 19z" />
    <path d="m608 529 3 6c5 11 3 77-3 90 0 2 1 2 9 2h9l-1-24c0-24 0-25 2-25l28 28c31 33 35 37 40 38 4 1 11 1 11-1l-3-2-33-32-31-32h6c6 0 11-2 16-7 6-5 8-10 8-17 0-11-6-20-15-24-4-2-7-2-26-2h-22l2 2zm34 4c8 2 11 4 14 11 3 11-2 22-13 25l-10 1h-7v-38h5l11 1zm81-4c-7 2-14 7-20 13a47 47 0 0 0-14 35c0 16 5 27 16 37 10 9 19 13 33 13 13 0 23-4 32-13 13-11 18-27 16-44-3-19-18-37-36-42-7-1-20-1-27 1zm23 4c9 3 19 15 23 27 3 9 3 25 0 34-5 16-18 28-32 28-8 0-14-3-20-9a45 45 0 0 1-14-36c0-16 4-26 13-36 9-8 18-11 30-8zm58 15c-5 45-10 77-14 88l-2 5h14l-1-4 9-68a562 562 0 0 1 25 62l10-28 11-31c2-4 2-4 5 12l12 53c2 4 3 5 5 6 4 2 14 3 14 1l-2-3-4-8-3-5 4-1c2 0 3-1 3-2l9-25 2-5h31l6 19 7 21c3 6 10 10 19 10h4l-4-5c-3-2-6-7-7-9l-2-4h14l2-8 6-15 4-8h30l7 20 8 22c3 4 9 6 16 7h6l-4-4c-6-6-8-11-14-27l-15-46-10-36-1-5h-7c-7 0-8 0-7 2l1 8c-1 15-25 76-33 87l-3 3-1-3-29-92v-5h-8c-6 0-7 0-6 2 2 5-2 23-16 58l-14 31a3480 3480 0 0 1-17-91l-11 34c-11 32-15 42-17 43a454 454 0 0 1-29-77l-3 21zm199 18 5 19h-12c-12 0-12 0-12-2l13-37 6 20zm-80 0 5 19h-24l6-19 7-19 6 19zm-631-4c-2 2 0 2 1 0v-1l-2 1zm787 443c-1 1 0 1 1 1l1-1-1-1-1 1zm13 0c-1 1 0 1 1 1l1-1-1-1-1 1z" />
  </svg>
);

export default function Wrapper() {
  // const [isMobile, setisMobile] = useState(false);
  const location = useLocation().pathname;

  const cart = useSelector(state => state.cart.items);

  return (
    <>
      <header>
        <div className={[css.container, css.headerContainer].join(' ')}>
          <nav className={css.navigation}>
            {/* <Link className="logo" to="/goit-react-hw-05-movies" end="true">
              Home
            </Link> */}
            <Link className={css.logo} to="/react-parfume/" end="true">
              <SvgComponent className={css.logoIcon} />
            </Link>
            <ul className={css.navigationList}>
              <li className={css.navigationLink}>
                <Link
                  to="/react-parfume/"
                  end="true"
                  className={
                    location === '/react-parfume/'
                      ? [css.link, css.currentPage].join(' ')
                      : css.link
                  }
                >
                  Головна
                </Link>
              </li>
              <li className={css.navigationLink}>
                <Link
                  to="/react-parfume/catalog"
                  end="true"
                  className={
                    location === '/react-parfume/catalog'
                      ? [css.link, css.currentPage].join(' ')
                      : css.link
                  }
                >
                  Каталог
                </Link>
              </li>
              {/* <li className="navigation-link">
                <Link to="/react-parfume" end="true" className="link">
                  <FiShoppingCart className="cart-icon" />
                </Link>
              </li> */}
            </ul>
          </nav>
          {/* <address>
            <ul className="adress-list">
              <li className="adress-item">
                <a href="mailto:info@devstudio.com" className="adress-link">
                  info@devstudio.com
                </a>
              </li>
              <li className="adress-item">
                <a href="tel:+110001111111" className="adress-link">
                  +11 (000) 111-11-11
                </a>
              </li>
            </ul>
          </address> */}
          <Link to="/react-parfume/buy" end="true" className={css.link}>
            <FiShoppingCart className={css.cartIcon} />
            {Number(cart.length) >= 1 && (
              <p className={css.cartIconInfo}>{Number(cart.length)}</p>
            )}
          </Link>

          {/* <button
            className="menu-toggle js-open-menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
            onClick={() => setisMobile(true)}
          >
            <IoMenuSharp className="mobile-menu-button" />
          </button> */}
        </div>
      </header>

      <Suspense fallback={<div className="Loading">Loading page...</div>}>
        <Outlet />
      </Suspense>

      <footer className={css.footer}>
        <ul className={[css.container, css.footerList].join(' ')}>
          <li className={css.footerContainer}>
            <Link className={css.logo} to="/react-parfume/" end="true">
              <SvgComponent className={css.logoIcon} />
            </Link>
            {/* <p className="footer-text">
              Increase the flow of customers and sales for your business with
              digital marketing & growth solutions.
            </p> */}
          </li>
          <li className={css.footerSocialListBox}>
            <p className={css.footerContainText}>Social media</p>
            <ul className={css.footerSocialList}>
              <li>
                <a
                  href="https://www.instagram.com/?hl=en"
                  className={css.footerSocialListLink}
                >
                  <IoLogoInstagram className={css.footerSocialListIcon} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/"
                  className={css.footerSocialListLink}
                >
                  <FaTiktok className={css.footerSocialListIcon} />
                </a>
              </li>
            </ul>
          </li>
          {/* <li className="subscribe-item">
            <p className="footer-contain-text">Subscribe</p>
            <form className="subscribe-form">
              <label className="email-label">
                <input
                  type="email"
                  name="email"
                  placeholder=" E-mail"
                  className="email-input"
                  required
                />
              </label>
              <button className="subscribe-button" type="submit">
                Subscribe
                <svg className="footer-subscribe-icon">
                  <use href="../images/icons.svg#icon-send"></use>
                </svg>
              </button>
            </form>
          </li> */}
        </ul>
      </footer>
      <ScrollUp />
      {/* {<Mobile isMobile={isMobile} setisMobile={setisMobile} />} */}
    </>
  );
}
