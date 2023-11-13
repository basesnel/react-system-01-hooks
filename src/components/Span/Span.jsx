import PropTypes from 'prop-types';

import css from './Span.module.css';

export default function Span({ children, centered }) {
  return (
    <p className={centered ? `${css.txt} ${css.centered}` : css.txt}>
      {children}
    </p>
  );
}

Span.propTypes = {
  children: PropTypes.node.isRequired,
  centered: PropTypes.bool,
};
