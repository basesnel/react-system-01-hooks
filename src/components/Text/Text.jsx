import PropTypes from 'prop-types';

import css from './Text.module.css';

export default function Text({ children, centered }) {
  return (
    <p className={centered ? `${css.txt} ${css.centered}` : css.txt}>
      {children}
    </p>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  centered: PropTypes.bool,
};
