import PropTypes from 'prop-types';

import css from './HideOverflow.module.css';

export default function HideOverflow(props) {
  const { children } = props;
  const { HideOverflow } = css;

  return <div className={HideOverflow}>{children}</div>;
}

HideOverflow.propTypes = {
  children: PropTypes.node.isRequired,
};
