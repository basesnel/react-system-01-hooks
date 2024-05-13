import PropTypes from 'prop-types';

import css from './Select.module.css';

const Select = props => {
  const { selectLabel, selectName, selected, list, icon, onHandleSelect } =
    props;
  const { field, label, wrapInput, input, iconInput } = css;

  return (
    <label className={field}>
      {selectLabel && <span className={label}>{selectLabel}</span>}
      <div className={wrapInput}>
        <select
          name={selectName}
          value={selected}
          onChange={onHandleSelect}
          className={input}
        >
          {list.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <span className={iconInput}>{icon}</span>
      </div>
    </label>
  );
};

Select.propTypes = {
  selectLabel: PropTypes.string,
  selectName: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  icon: PropTypes.node,
  onHandleSelect: PropTypes.func.isRequired,
};

Select.defaultProps = {
  selectLabel: null,
  icon: null,
};

export default Select;
