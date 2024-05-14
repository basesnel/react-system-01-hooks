import PropTypes from 'prop-types';

import css from './FieldOverlay.module.css';

const FieldOverlay = props => {
  const { children } = props;
  const { fieldOverlay } = css;

  return <div className={fieldOverlay}>{children}</div>;
};

FieldOverlay.propTypes = {
  children: PropTypes.any.isRequired,
};

export default FieldOverlay;
