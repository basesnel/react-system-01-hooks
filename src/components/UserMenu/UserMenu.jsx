import { DecoratedButton } from 'components/DecoratedButton/DecoratedButton';
import { Grid } from 'components/Grid/Grid';

export const UserMenu = ({ user, onLogOut }) => {
  return (
    <Grid>
      <span>Welcome, {user.name}</span>
      <DecoratedButton caption="Log Out" onClick={onLogOut} />
    </Grid>
  );
};
