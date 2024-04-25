import PropTypes from 'prop-types';

import css from './Span.module.css';

export default function Span({ children, centered }) {
  return (
    <span className={centered ? `${css.txt} ${css.centered}` : css.txt}>
      {children}
    </span>
  );
}

Span.propTypes = {
  children: PropTypes.node.isRequired,
  centered: PropTypes.bool,
};

Span.defaultProps = {
  centered: null,
};
