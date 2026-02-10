import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Select = props => {
  const { label, name, value, list, icon, onChange } = props;
  const { field, caption, input, pictogram } = styles;

  return (
    <div className={field}>
      {label && <label className={caption}>{label}</label>}
      <select name={name} value={value} onChange={onChange} className={input}>
        {list?.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <span className={pictogram}>{icon}</span>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.node,
  onHandleSelect: PropTypes.func.isRequired,
};

Select.defaultProps = {
  label: null,
  value: '',
  list: null,
  icon: null,
};

export default Select;
