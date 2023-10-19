import PropTypes from 'prop-types';

import css from './Canvas.module.css';

export default function Canvas({ children, onPointerMove, ...delegated }) {
  return (
    <div onPointerMove={onPointerMove} className={css.canvas} {...delegated}>
      {children}
    </div>
  );
}

Canvas.propTypes = {
  children: PropTypes.any.isRequired,
};
