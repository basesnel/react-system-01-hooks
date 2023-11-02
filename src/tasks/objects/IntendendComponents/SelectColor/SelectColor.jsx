import PropTypes from 'prop-types';

import css from './SelectColor.module.css';

export default function SelectColor({ color, icon, onHandleColorChange }) {
  return (
    <div className={css['wrap-option']}>
      <select
        value={color}
        onChange={onHandleColorChange}
        className={css.option}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <span className={css.icon}>{icon}</span>
    </div>
  );
}

SelectColor.propTypes = {
  color: PropTypes.string.isRequired,
  onHandleColorChange: PropTypes.func.isRequired,
};
