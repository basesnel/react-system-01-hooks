import PropTypes from 'prop-types';

import styles from './styles.module.css';

const IconButton = props => {
  const { icon, caption, onClick, isDisabled } = props;

  return (
    <button className={styles.button} onClick={onClick} disabled={isDisabled}>
      {icon}
      <span className={styles.visuallyHidden}>{caption}</span>
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.any.isRequired,
  caption: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

IconButton.defaultProps = {
  isDisabled: null,
};

export default IconButton;
