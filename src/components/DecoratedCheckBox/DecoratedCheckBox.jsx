import PropTypes from 'prop-types';

import Span from 'components/Span';

import css from './DecoratedCheckBox.module.css';

export default function DecoratedCheckBox({ checked, onChange, label }) {
  return (
    <label className={css.field}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <Span>{label}</Span>
    </label>
  );
}

DecoratedCheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
