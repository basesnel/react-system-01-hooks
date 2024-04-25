import PropTypes from 'prop-types';

import Button from 'components/Button';
import FlexBox from 'components/FlexBox';

import css from './UserMenu.module.css';

export default function UserMenu({ user, onLogOut }) {
  return (
    <FlexBox>
      <span className={css.user}>Welcome, {user.name}</span>
      <Button caption="Log&nbsp;Out" onClick={onLogOut} />
    </FlexBox>
  );
}

UserMenu.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogOut: PropTypes.func.isRequired,
};
