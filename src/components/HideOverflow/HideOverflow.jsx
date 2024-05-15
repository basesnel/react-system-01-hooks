import PropTypes from 'prop-types';

import css from './HideOverflow.module.css';

const HideOverflow = props => {
  const { children } = props;
  const { hideOverflow } = css;

  return <div className={hideOverflow}>{children}</div>;
};

HideOverflow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HideOverflow;
