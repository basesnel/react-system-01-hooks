import PropTypes from 'prop-types';

import styles from './styles.module.css';

const TextArea = props => {
  const { disabled, name, value, label, placeholder, onChange, icon, ref } =
    props;

  const { field, caption, input, pictogram } = styles;

  const valueProps = {
    ...(value === null || onChange === null
      ? null
      : { value: value, onChange: onChange }),
  };

  return (
    <div className={field}>
      {label && (
        <label className={caption} htmlFor={name}>
          {label}
        </label>
      )}
      <textarea
        disabled={disabled}
        id={name}
        {...valueProps}
        autoComplete="off"
        className={input}
        placeholder={placeholder}
        ref={ref}
      />
      <span className={pictogram}>{icon}</span>
    </div>
  );
};

TextArea.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  icon: PropTypes.node,
  ref: PropTypes.any,
};

TextArea.defaultProps = {
  disabled: null,
  name: null,
  value: null,
  label: null,
  placeholder: null,
  onChange: null,
  icon: null,
  ref: null,
};

export default TextArea;
