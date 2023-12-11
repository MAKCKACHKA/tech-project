import React from 'react';

import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import css from './wrapper.module.css';

import { useLocation } from 'react-router-dom';
import { SvgLikeActive } from 'project-folder/Svg';
import ScrollUp from 'components/ScrollUp/ScrollUp';

export default function Wrapper() {
  const location = useLocation().pathname;

  return (
    <>
      <header>
        <div className={[css.container, css.headerContainer].join(' ')}>
          <nav className={css.navigation}>
            <ul className={css.navigationList}>
              <li className={css.navigationLink}>
                <Link
                  to="/tech-project/"
                  end="true"
                  className={
                    location === '/tech-project/'
                      ? [css.link, css.currentPage].join(' ')
                      : css.link
                  }
                >
                  Home
                </Link>
              </li>
              <li className={css.navigationLink}>
                <Link
                  to="/tech-project/catalog"
                  end="true"
                  className={
                    location === '/tech-project/catalog'
                      ? [css.link, css.currentPage].join(' ')
                      : css.link
                  }
                >
                  Catalog
                </Link>
              </li>
            </ul>
          </nav>
          <Link to="/tech-project/favorites" end="true" className={css.link}>
            <SvgLikeActive />
          </Link>
        </div>
      </header>

      <Suspense fallback={<div className="Loading">Loading page...</div>}>
        <Outlet />
      </Suspense>

      <footer className={css.footer}>
        <ul className={[css.container, css.footerList].join(' ')}>
          <li className={css.footerContainer}>
            <a href="https://github.com/MAKCKACHKA/tech-project">Github</a>
          </li>
        </ul>
      </footer>
      <ScrollUp />
    </>
  );
}
