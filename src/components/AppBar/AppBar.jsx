import { useContext } from 'react';

import { Container, Logo, NavBar, UserMenu, FlexBox, Button } from 'components';

import authContext from 'contexts/auth/context';

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
