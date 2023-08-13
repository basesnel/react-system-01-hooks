import { NavLink } from 'react-router-dom';

import { Container } from 'components/Container/Container';
import { Logo } from 'components/Logo/Logo';

export const AppBar = () => {
  return (
    <header>
      <Container>
        <Logo text="WebForge" />
        <nav>
          <ul>
            <li>
              <NavLink to="/counter">Counter</NavLink>
            </li>
            <li>
              <NavLink to="/form">Form</NavLink>
            </li>
            <li>
              <NavLink to="/time">Time</NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
