import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Textarea = props => {
  const { disabled, name, value, label, placeholder, onChange, icon, ref } =
    props;

  const { field, caption, wrap, input, pictogram, iconTextarea } = styles;

  const valueProps = {
    ...(value === null || onChange === null
      ? { defaultValue: '', readOnly: true }
      : { value: value, onChange: onChange }),
  };

  return (
    <div className={field}>
      {label && (
        <label className={caption} htmlFor={name}>
          {label}
        </label>
      )}
      <div className={wrap}>
        <textarea
          disabled={disabled}
          id={name}
          {...valueProps}
          autoComplete="off"
          className={input}
          placeholder={placeholder}
          ref={ref}
        />
        <span className={`${pictogram} ${iconTextarea}`}>{icon}</span>
      </div>
    </div>
  );
};

Textarea.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  icon: PropTypes.node,
  ref: PropTypes.any,
};

Textarea.defaultProps = {
  disabled: null,
  name: null,
  value: null,
  label: null,
  placeholder: null,
  onChange: null,
  icon: null,
  ref: null,
};

export default Textarea;
