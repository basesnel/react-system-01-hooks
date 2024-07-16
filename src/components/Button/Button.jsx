import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Button = props => {
  const { type, caption, onClick, isDisabled, ...delegated } = props;

  return (
    <button
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
  type: PropTypes.oneOf(['button', 'submit']),
  caption: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  delegated: PropTypes.any,
};

Button.defaultProps = {
  type: 'button',
  onClick: null,
  isDisabled: null,
  delegated: null,
};

export default Button;
