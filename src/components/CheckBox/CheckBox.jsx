import PropTypes from 'prop-types';

import Span from 'components/Span';

import css from './CheckBox.module.css';

export default function CheckBox({ name, checked, onChange, label }) {
  return (
    <label className={css.field}>
      <input
        className={css.check}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <Span>{label}</Span>
    </label>
  );
}

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
