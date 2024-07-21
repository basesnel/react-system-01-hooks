import PropTypes from 'prop-types';

import { Button, FlexBox } from 'components';

import styles from './styles.module.css';

const UserMenu = props => {
  const { user, onLogOut } = props;

  return (
    <FlexBox>
      <span className={styles.userName}>Welcome, {user.name}</span>
      <Button caption="Log&nbsp;Out" onClick={onLogOut} />
    </FlexBox>
  );
};

UserMenu.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogOut: PropTypes.func.isRequired,
};

export default UserMenu;
