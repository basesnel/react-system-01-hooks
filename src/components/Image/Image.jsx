import PropTypes from 'prop-types';

import css from './Image.module.css';

const Image = props => {
  const { isLazy, src, desc, width } = props;
  const { thumb } = css;

  return (
    <div className={thumb}>
      <img loading={isLazy} src={src} alt={desc} width={width} />
    </div>
  );
};

Image.propTypes = {
  isLazy: PropTypes.oneOf(['lazy']),
  src: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  width: PropTypes.any,
};

Image.defaultProps = {
  isLazy: null,
  width: null,
};

export default Image;
