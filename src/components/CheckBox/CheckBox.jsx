import PropTypes from 'prop-types';

import styles from './styles.module.css';

const CheckBox = props => {
  const { name, checked, onChange, label, disabled } = props;
  const { field, check, span } = styles;

  return (
    <label className={field}>
      <input
        className={check}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className={span}>{label}</span>
    </label>
  );
};

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

CheckBox.defaultProps = {
  disabled: false,
};

export default CheckBox;
