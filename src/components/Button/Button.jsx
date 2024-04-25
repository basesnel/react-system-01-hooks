import PropTypes from 'prop-types';

import css from './Button.module.css';

export default function Button({ caption, onClick, isDisabled, ...delegated }) {
  return (
    <button
      className={css.Button}
      onClick={onClick}
      disabled={isDisabled}
      type="button"
      {...delegated}
    >
      {caption}
    </button>
  );
}

Button.propTypes = {
  caption: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  delegated: PropTypes.any,
};

Button.defaultProps = {
  onClick: null,
  isDisabled: null,
  delegated: null,
};
