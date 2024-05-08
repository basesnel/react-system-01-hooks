import PropTypes from 'prop-types';

import css from './VisuallyHidden.module.css';

export default function VisuallyHidden(props) {
  const { children, ...delegated } = props;
  const { visuallyHidden } = css;

  return (
    <span className={visuallyHidden} {...delegated}>
      {children}
    </span>
  );
}

VisuallyHidden.propTypes = {
  children: PropTypes.node.isRequired,
  delegated: PropTypes.any,
};

VisuallyHidden.defaultProps = {
  delegated: null,
};
