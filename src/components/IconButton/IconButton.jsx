import PropTypes from 'prop-types';

import css from './IconButton.module.css';

const IconButton = props => {
  const { icon, caption, onClick, isDisabled } = props;
  const { button, visuallyHidden } = css;

  return (
    <button className={button} onClick={onClick} disabled={isDisabled}>
      {icon}
      <span className={visuallyHidden}>{caption}</span>
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.any.isRequired,
  caption: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

IconButton.defaultProps = {
  isDisabled: null,
};

export default IconButton;
