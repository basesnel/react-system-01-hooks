import { useContext } from 'react';

import authContext from 'contexts/auth/context';

import Container from 'components/Container';
import Logo from 'components/Logo';
import NavBar from 'components/NavBar';
import UserMenu from 'components/UserMenu';
import FlexBox from 'components/FlexBox';
import Button from 'components/Button';

import css from './AppBar.module.css';

export default function AppBar() {
  const { isLoggedIn, user, onLogIn, onLogOut } = useContext(authContext);

  return (
    <header className={css.appbar}>
      <Container variant="navigation">
        <Logo text="WebForge" />
        <NavBar />

        {isLoggedIn ? (
          <UserMenu onLogOut={onLogOut} user={user} />
        ) : (
          <FlexBox>
            <Button caption="Log&nbsp;In" onClick={onLogIn} />
          </FlexBox>
        )}
      </Container>
    </header>
  );
}
