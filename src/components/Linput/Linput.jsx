import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Linput = props => {
  const { label, type, name, value, onChange } = props;

  return (
    <label className={styles.label}>
      <span className={styles.span}>{label}: </span>
      <input
        className={styles.input}
        name={name}
        type={type}
        size={10}
        value={value}
        onChange={onChange}
        placeholder={label}
      />
    </label>
  );
};

Linput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'file', 'email', 'url', 'tel'])
    .isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Linput.defaultProps = {
  label: 'Label',
  type: 'text',
  name: 'name',
  value: null,
  onChange: null,
};

export default Linput;
