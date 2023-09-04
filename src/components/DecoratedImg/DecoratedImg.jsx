import PropTypes from 'prop-types';

import css from './DecoratedImg.module.css';

export default function DecoratedImg({ src, name, width = null }) {
  return (
    <div className={css.thumb}>
      <img src={src} alt={name} width={width} />
    </div>
  );
}

DecoratedImg.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.any,
};
