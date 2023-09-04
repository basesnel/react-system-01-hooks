import PropTypes from 'prop-types';

import css from './DecoratedButton.module.css';

export default function DecoratedButton({ caption, onClick, isDisabled }) {
  return (
    <button
      className={css.decoratedButton}
      onClick={onClick}
      disabled={isDisabled}
    >
      {caption}
    </button>
  );
}

DecoratedButton.propTypes = {
  caption: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};
