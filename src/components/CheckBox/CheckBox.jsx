import PropTypes from 'prop-types';

import Span from 'components/Span';

import css from './CheckBox.module.css';

const CheckBox = props => {
  const { name, checked, onChange, label } = props;
  const { field, check } = css;

  return (
    <label className={field}>
      <input
        className={check}
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
