import PropTypes from 'prop-types';

import css from './Canvas.module.css';

const Canvas = props => {
  const { children, onPointerMove, ...delegated } = props;
  const { canvas } = css;

  return (
    <div onPointerMove={onPointerMove} className={canvas} {...delegated}>
      {children}
    </div>
  );
};

Canvas.propTypes = {
  children: PropTypes.any.isRequired,
  onPointerMove: PropTypes.func.isRequired,
};

export default Canvas;
