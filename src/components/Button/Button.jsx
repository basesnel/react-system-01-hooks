import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Button = props => {
  const { id, type, caption, onClick, isDisabled, full, ...delegated } = props;
  const { button, fullfilled } = styles;

  const filled = full ? fullfilled : '';

  return (
    <button
      id={id}
      className={`${button} ${filled}`}
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
  full: PropTypes.bool,
  delegated: PropTypes.any,
};

Button.defaultProps = {
  id: null,
  type: 'button',
  onClick: null,
  isDisabled: null,
  full: false,
  delegated: null,
};

export default Button;
