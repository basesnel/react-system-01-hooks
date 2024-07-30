import PropTypes from 'prop-types';

import styles from './styles.module.css';

const TextArea = props => {
  const {
    isDisabled,
    textAreaType,
    textAreaName,
    textAreaValue,
    textAreaLabel,
    textAreaPlaceholder,
    handleChange,
    icon,
    textAreaRef,
  } = props;

  return (
    <div className={styles.field}>
      {textAreaLabel && (
        <label className={styles.label} htmlFor={textAreaName}>
          {textAreaLabel}
        </label>
      )}
      <div className={styles.wrap}>
        <textarea
          disabled={isDisabled}
          type={textAreaType}
          name={textAreaName}
          id={textAreaName}
          value={textAreaValue}
          autoComplete="off"
          className={styles.input}
          placeholder={textAreaPlaceholder}
          onChange={handleChange}
          ref={textAreaRef}
        />
        <span className={`${styles.icon} ${styles.iconTextarea}`}>{icon}</span>
      </div>
    </div>
  );
};

TextArea.propTypes = {
  isDisabled: PropTypes.bool,
  textAreaType: PropTypes.string,
  textAreaName: PropTypes.string,
  textAreaValue: PropTypes.string,
  textAreaLabel: PropTypes.string,
  textAreaPlaceholder: PropTypes.string,
  handleChange: PropTypes.func,
  icon: PropTypes.node,
  textAreaRef: PropTypes.any,
};

TextArea.defaultProps = {
  isDisabled: null,
  textAreaType: null,
  textAreaName: null,
  textAreaValue: null,
  textAreaLabel: null,
  textAreaPlaceholder: null,
  handleChange: null,
  icon: null,
  textAreaRef: null,
};

export default TextArea;
