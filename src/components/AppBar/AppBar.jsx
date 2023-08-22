import { useContext } from 'react';

import { Container } from 'components/Container/Container';
import { Logo } from 'components/Logo/Logo';
import { NavBar } from 'components/NavBar/NavBar';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { DecoratedButton } from 'components/DecoratedButton/DecoratedButton';
import authContext from 'contexts/auth/context';

import css from './AppBar.module.css';
import { Grid } from 'components/Grid/Grid';

export const AppBar = () => {
  const { isLoggedIn, user, onLogIn, onLogOut } = useContext(authContext);

  return (
    <header className={css.appbar}>
      <Container variant="navigation">
        <Logo text="WebForge" />
        <NavBar />

        {isLoggedIn ? (
          <UserMenu onLogOut={onLogOut} user={user} />
        ) : (
          <Grid>
            <DecoratedButton caption="Log In" onClick={onLogIn} />
          </Grid>
        )}
      </Container>
    </header>

    // time 2:00:47 => 2:04:03
    // <authContext.Consumer>
    //   {({ isLoggedIn, user, onLogIn, onLogOut }) => (
    //     <header className={css.appbar}>
    //       <Container variant="navigation">
    //         <Logo text="WebForge" />
    //         <NavBar />

    //         {isLoggedIn ? (
    //           <UserMenu onLogOut={onLogOut} user={user} />
    //         ) : (
    //           <button type="button" onClick={onLogIn}>
    //             Log In
    //           </button>
    //         )}
    //       </Container>
    //     </header>
    //   )}
    // </authContext.Consumer>
  );
};
