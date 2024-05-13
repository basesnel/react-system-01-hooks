import PropTypes from 'prop-types';

import css from './Image.module.css';

const Image = props => {
  const { src, desc, width } = props;
  const { thumb } = css;

  return (
    <div className={thumb}>
      <img src={src} alt={desc} width={width} />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  width: PropTypes.any,
};

Image.defaultProps = {
  width: null,
};

export default Image;
