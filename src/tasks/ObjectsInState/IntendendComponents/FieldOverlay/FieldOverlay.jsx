import PropTypes from 'prop-types';

import css from './FieldOverlay.module.css';

export default function FieldOverlay({ children }) {
  return <div className={css['field-overlay']}>{children}</div>;
}

FieldOverlay.propTypes = {
  children: PropTypes.any.isRequired,
};
