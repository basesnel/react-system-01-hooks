import PropTypes from 'prop-types';

import css from './Span.module.css';

const Span = props => {
  const { centered, children } = props;
  const { text, centeredText } = css;

  return (
    <span className={centered ? `${text} ${centeredText}` : text}>
      {children}
    </span>
  );
};

Span.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Span.defaultProps = {
  centered: null,
};

export default Span;
