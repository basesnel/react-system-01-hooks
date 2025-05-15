import { NavLink } from 'react-router-dom';

import styles from './styles.module.css';

const NavBar = () => {
  const { menu, item, navlink, navlinkActive } = styles;

  return (
    <nav>
      <ul className={menu}>
        <li className={item}>
          <NavLink
            className={({ isActive }) => (isActive ? navlinkActive : navlink)}
            to="/form"
          >
            Form
          </NavLink>
        </li>
        <li className={item}>
          <NavLink
            className={({ isActive }) => (isActive ? navlinkActive : navlink)}
            to="/simple-states"
          >
            Simple states
          </NavLink>
        </li>
        <li className={item}>
          <NavLink
            className={({ isActive }) => (isActive ? navlinkActive : navlink)}
            to="/skip-first-render"
          >
            Skip first render
          </NavLink>
        </li>
        <li className={item}>
          <NavLink
            className={({ isActive }) => (isActive ? navlinkActive : navlink)}
            to="/colorpicker"
          >
            Color picker
          </NavLink>
        </li>
        <li className={item}>
          <NavLink
            className={({ isActive }) => (isActive ? navlinkActive : navlink)}
            to="/clock"
          >
            Clock
          </NavLink>
        </li>
        <li className={item}>
          <NavLink
            className={({ isActive }) => (isActive ? navlinkActive : navlink)}
            to="/pokemon"
          >
            Pokemon
          </NavLink>
        </li>
        <li className={item}>
          <NavLink
            className={({ isActive }) => (isActive ? navlinkActive : navlink)}
            to="/characters"
          >
            Characters
          </NavLink>
        </li>
        <li className={item}>
          <NavLink
            className={({ isActive }) => (isActive ? navlinkActive : navlink)}
            to="/news"
          >
            News
          </NavLink>
        </li>
        <li className={item}>
          <NavLink
            className={({ isActive }) => (isActive ? navlinkActive : navlink)}
            to="/big-cards"
          >
            Big cards
          </NavLink>
        </li>
        <li className={item}>
          <NavLink
            className={({ isActive }) => (isActive ? navlinkActive : navlink)}
            to="/queueing"
          >
            Queueing
          </NavLink>
        </li>
        <li className={item}>
          <NavLink
            className={({ isActive }) => (isActive ? navlinkActive : navlink)}
            to="/objects"
          >
            Objects
          </NavLink>
        </li>
        <li className={item}>
          <NavLink
            className={({ isActive }) => (isActive ? navlinkActive : navlink)}
            to="/arrays"
          >
            Arrays
          </NavLink>
        </li>
        <li className={item}>
          <NavLink
            className={({ isActive }) => (isActive ? navlinkActive : navlink)}
            to="/use-effects"
          >
            useEffects cases
          </NavLink>
        </li>
        <li className={item}>
          <NavLink
            className={({ isActive }) => (isActive ? navlinkActive : navlink)}
            to="/escape-hatches-part-1"
          >
            Escape hatches - part I
          </NavLink>
        </li>
        <li className={item}>
          <NavLink
            className={({ isActive }) => (isActive ? navlinkActive : navlink)}
            to="/escape-hatches-part-2"
          >
            Escape hatches - part II
          </NavLink>
        </li>
        <li className={item}>
          <NavLink
            className={({ isActive }) => (isActive ? navlinkActive : navlink)}
            to="/managing-state"
          >
            Managing state
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
