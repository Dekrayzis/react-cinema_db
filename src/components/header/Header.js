import React, { useState } from 'react';
import logo from '../../assets/cinema-logo.svg';
import './header.scss';

const Header_list = [
  {
    id: 0,
    iconClass: 'fa fa-film',
    name: 'Now playing',
    type: 'now_playing'
  },
  {
    id: 1,
    iconClass: 'fa fa-fire',
    name: 'Popular',
    type: 'popular'
  },
  {
    id: 2,
    iconClass: 'fa fa-star',
    name: 'Top rated',
    type: 'top_rated'
  },
  {
    id: 3,
    iconClass: 'fa fa-plus-square',
    name: 'Upcoming',
    type: 'upcoming'
  }
];

const Header = () => {
  const [navClass, setNavClass] = useState(false);
  const [menuClass, setMenuClass] = useState(false);

  const toggleMenu = () => {
    setMenuClass(!menuClass);
    setNavClass(!navClass);

    if (navClass) {
      document.body.classList.add('header-nav-open');
    } else {
      document.body.classList.remove('header-nav-open');
    }
  };

  return (
    <div className="header-nav-wrapper">
      <div className="header-bar">
        <nav className="header-navbar">
          <div className="header-image">
            <img src={logo} alt="logo" />{' '}
          </div>
          <div
            id="header-mobile-menu"
            className={menuClass ? 'header-menu-toggle is-active' : 'header-menu-toggle'}
            onClick={toggleMenu}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>
          <ul className={navClass ? 'header-nav header-mobile-nav' : 'header-nav'}>
            {Header_list.map((item) => (
              <li key={item.id} className="header-nav-item">
                <span className="header-list-name">
                  <i className={item.iconClass} />
                </span>
                &nbsp;{item.name}
              </li>
            ))}

            <input className="search-input" type="text" placeholder="Search for movie" />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
