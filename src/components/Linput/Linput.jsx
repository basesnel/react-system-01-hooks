import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Linput = props => {
  const { label, type, name, value, onChange, disabled } = props;

  return (
    <label className={styles.label}>
      <span className={styles.span}>{label}: </span>
      <input
        className={styles.input}
        name={name}
        type={type}
        size={4}
        value={value}
        onChange={onChange}
        placeholder={label}
        disabled={disabled}
      />
    </label>
  );
};

Linput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'file', 'email', 'url', 'tel']),
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

Linput.defaultProps = {
  label: 'Label',
  type: 'text',
  name: 'name',
  value: null,
  onChange: null,
  disabled: false,
};

export default Linput;
