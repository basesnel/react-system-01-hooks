import PropTypes from 'prop-types';

import css from './IconButton.module.css';

export default function IconButton({ icon, caption, onClick, isDisabled }) {
  return (
    <button className={css.btn} onClick={onClick} disabled={isDisabled}>
      {icon}
      <span className={css['visually-hidden']}>{caption}</span>
    </button>
  );
}

IconButton.propTypes = {
  icon: PropTypes.any.isRequired,
  caption: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

IconButton.defaultProps = {
  isDisabled: null,
};
