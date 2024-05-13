import PropTypes from 'prop-types';

import css from './Button.module.css';

const Button = props => {
  const { type, caption, onClick, isDisabled, ...delegated } = props;
  const { button } = css;

  return (
    <button
      className={button}
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
