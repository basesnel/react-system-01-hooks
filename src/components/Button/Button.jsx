import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Button = props => {
  const { id, type, caption, onClick, isDisabled, ...delegated } = props;

  return (
    <button
      id={id}
      className={styles.button}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      {...delegated}
    >
      {caption}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  caption: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  delegated: PropTypes.any,
};

Button.defaultProps = {
  id: null,
  type: 'button',
  onClick: null,
  isDisabled: null,
  delegated: null,
};

export default Button;
