import PropTypes from 'prop-types';

import css from './Slide.module.css';

export default function Slide({ children, itemRef, ...delegated }) {
  return (
    <li className={css.slide} ref={itemRef} {...delegated}>
      {children}
    </li>
  );
}

Slide.propTypes = {
  children: PropTypes.node.isRequired,
  delegated: PropTypes.any,
};

Slide.defaultProps = {
  delegated: null,
};
