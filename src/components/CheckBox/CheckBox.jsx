import PropTypes from 'prop-types';

import { Span } from 'components';

import styles from './styles.module.css';

const CheckBox = props => {
  const { name, checked, onChange, label } = props;

  return (
    <label className={styles.field}>
      <input
        className={styles.check}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <Span>{label}</Span>
    </label>
  );
};

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default CheckBox;
