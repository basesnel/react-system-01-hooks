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
      {/* <span>{caption}</span> */}
      <span className={css['visually-hidden']}>{caption}</span>
    </button>
  );
}

DecoratedIconButton.propTypes = {
  caption: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};
