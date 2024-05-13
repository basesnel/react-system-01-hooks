import PropTypes from 'prop-types';

import css from './Slide.module.css';

const Slide = props => {
  const { slideRef, children, ...delegated } = props;
  const { slide } = css;

  return (
    <li className={slide} ref={slideRef} {...delegated}>
      {children}
    </li>
  );
};

Slide.propTypes = {
  slideRef: PropTypes.any,
  children: PropTypes.node.isRequired,
  delegated: PropTypes.any,
};

Slide.defaultProps = {
  slideRef: null,
  delegated: null,
};

export default Slide;
