import { Container } from 'components/Container/Container';
import { Logo } from 'components/Logo/Logo';
import { NavBar } from 'components/NavBar/NavBar';

import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={css.appbar}>
      <Container>
        <Logo text="WebForge" />
        <NavBar />
      </Container>
    </header>
  );
};
