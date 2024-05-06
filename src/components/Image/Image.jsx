import PropTypes from 'prop-types';

import css from './Image.module.css';

export default function Image({ src, name, width = null }) {
  return (
    <div className={css.thumb}>
      <img src={src} alt={name} width={width} />
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.any,
};

Image.defaultProps = {
  width: null,
};
