import DecoratedButton from 'components/DecoratedButton';
import Grid from 'components/Grid';

import css from './UserMenu.module.css';

export default function UserMenu({ user, onLogOut }) {
  return (
    <Grid>
      <span className={css.user}>Welcome, {user.name}</span>
      <DecoratedButton caption="Log Out" onClick={onLogOut} />
    </Grid>
  );
}