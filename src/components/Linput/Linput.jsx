import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Linput = props => {
  const { label, type, name, value, onChange, disabled } = props;
  const { caption, span, input } = styles;

  return (
    <label className={caption}>
      <span className={span}>{label}: </span>
      <input
        className={input}
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
