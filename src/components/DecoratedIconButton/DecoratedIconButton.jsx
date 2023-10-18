import PropTypes from 'prop-types';

import css from './DecoratedIconButton.module.css';

export default function DecoratedIconButton({
  icon,
  caption,
  onClick,
  isDisabled,
}) {
  return (
    <button className={css.btn} onClick={onClick} disabled={isDisabled}>
      {icon}
      <span className={css['visually-hidden']}>{caption}</span>
    </button>
  );
}

DecoratedIconButton.propTypes = {
  icon: PropTypes.any.isRequired,
  caption: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};
