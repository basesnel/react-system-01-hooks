import { NavLink } from 'react-router-dom';

import css from './NavBar.module.css';

export const NavBar = () => {
  return (
    <nav>
      <ul className={css.menu}>
        <li className={css.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.navlinkactive : css.navlink
            }
            to="/counter"
          >
            Counter
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.navlinkactive : css.navlink
            }
            to="/form"
          >
            Form
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.navlinkactive : css.navlink
            }
            to="/time"
          >
            Time
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
