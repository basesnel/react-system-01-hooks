import PropTypes from 'prop-types';

import css from './DecoratedIconButton.module.css';

export default function DecoratedIconButton({ caption, onClick, isDisabled }) {
  return (
    <button className={css.btn} onClick={onClick} disabled={isDisabled}>
      {caption}
    </button>
  );
}

DecoratedIconButton.propTypes = {
  caption: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};
