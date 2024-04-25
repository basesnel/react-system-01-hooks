import PropTypes from 'prop-types';

import css from './VisuallyHidden.module.css';

export default function VisuallyHidden({ children, ...delegated }) {
  return (
    <span className={css['visually-hidden']} {...delegated}>
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
