import { useContext } from 'react';

import authContext from 'contexts/auth/context';

import Container from 'components/Container';
import Logo from 'components/Logo';
import NavBar from 'components/NavBar';
import UserMenu from 'components/UserMenu';
import FlexBox from 'components/FlexBox';
import Button from 'components/Button';

import css from './AppBar.module.css';

const AppBar = () => {
  const { isLoggedIn, user, onLogIn, onLogOut } = useContext(authContext);
  const { appBar } = css;

  return (
    <header className={appBar}>
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
};

export default AppBar;
