import PropTypes from 'prop-types';

import css from './DecoratedSelect.module.css';

export default function DecoratedSelect({
  selectLabel,
  selectName,
  selected,
  list,
  icon,
  onHandleSelect,
}) {
  return (
    <label className={css.field}>
      {selectLabel && <span className={css.label}>{selectLabel}</span>}
      <div className={css['wrap-input']}>
        <select
          name={selectName}
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
  selectLabel: PropTypes.string,
  selectName: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.node,
  onHandleSelect: PropTypes.func.isRequired,
};
