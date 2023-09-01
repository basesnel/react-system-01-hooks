import DecoratedButton from 'components/DecoratedButton';
import Grid from 'components/Grid';

export default function UserMenu({ user, onLogOut }) {
  return (
    <Grid>
      <span>Welcome, {user.name}</span>
      <DecoratedButton caption="Log Out" onClick={onLogOut} />
    </Grid>
  );
}
