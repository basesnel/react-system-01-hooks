import PropTypes from 'prop-types';

import css from './DecoratedSelect.module.css';

export default function DecoratedSelect({
  inputLabel,
  selected,
  list,
  icon,
  onHandleSelect,
}) {
  return (
    <label className={css.field}>
      {inputLabel && <span className={css.label}>{inputLabel}</span>}
      <div className={css['wrap-input']}>
        <select
          value={selected}
          onChange={onHandleSelect}
          className={css.input}
        >
          {list.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <span className={css.icon}>{icon}</span>
      </div>
    </label>
  );
}

DecoratedSelect.propTypes = {
  inputLabel: PropTypes.string,
  selected: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.node,
  onHandleSelect: PropTypes.func.isRequired,
};
