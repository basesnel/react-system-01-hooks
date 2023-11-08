import PropTypes from 'prop-types';

import css from './Canvas.module.css';

export default function Canvas({ children, ...delegated }) {
  return (
    <div className={css.canvas} {...delegated}>
      {children}
    </div>
  );
}

Canvas.propTypes = {
  children: PropTypes.any.isRequired,
};
