import PropTypes from 'prop-types';

import css from './DecoratedSelect.module.css';

export default function DecoratedSelect({
  selected,
  list,
  icon,
  onHandleSelect,
}) {
  return (
    <div className={css['wrap-input']}>
      <select value={selected} onChange={onHandleSelect} className={css.input}>
        {list.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <span className={css.icon}>{icon}</span>
    </div>
  );
}

DecoratedSelect.propTypes = {
  selected: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.node,
  onHandleSelect: PropTypes.func.isRequired,
};
