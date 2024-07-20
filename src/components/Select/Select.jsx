import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Select = props => {
  const { selectLabel, selectName, selected, list, icon, onHandleSelect } =
    props;

  return (
    <label className={styles.field}>
      {selectLabel && <span className={styles.label}>{selectLabel}</span>}
      <div className={styles.wrapInput}>
        <select
          name={selectName}
          value={selected}
          onChange={onHandleSelect}
          className={styles.input}
        >
          {list?.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <span className={styles.iconInput}>{icon}</span>
      </div>
    </label>
  );
};

Select.propTypes = {
  selectLabel: PropTypes.string,
  selectName: PropTypes.string.isRequired,
  selected: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.node,
  onHandleSelect: PropTypes.func.isRequired,
};

Select.defaultProps = {
  selectLabel: null,
  selected: '',
  laist: null,
  icon: null,
};

export default Select;
