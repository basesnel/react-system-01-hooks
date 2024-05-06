import PropTypes from 'prop-types';

import css from './Button.module.css';

export default function Button({
  type,
  caption,
  onClick,
  isDisabled,
  ...delegated
}) {
  return (
    <button
      className={css.button}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      {...delegated}
    >
      {caption}
    </button>
  );
}

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
