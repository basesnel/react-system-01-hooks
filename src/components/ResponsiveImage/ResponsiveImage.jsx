import PropTypes from 'prop-types';

const ResponsiveImage = props => {
  const {
    isLazy,
    image320,
    image640,
    image960,
    image1280,
    sizes,
    alt,
    cssName,
  } = props;

  return (
    <picture>
      <source
        srcSet={`
                ${require(`../../assets/images/${image320}.webp`)}   320w,
                ${require(`../../assets/images/${image640}.webp`)}   640w,
                ${require(`../../assets/images/${image960}.webp`)}   960w,
                ${require(`../../assets/images/${image1280}.webp`)} 1280w
              `}
        type="image/webp"
        sizes={sizes}
      />
      <img
        loading={isLazy}
        srcSet={`
                ${require(`../../assets/images/${image320}.jpg`)}   320w,
                ${require(`../../assets/images/${image640}.jpg`)}  640w,
                ${require(`../../assets/images/${image960}.jpg`)}   960w,
                ${require(`../../assets/images/${image1280}.jpg`)} 1280w
              `}
        src={require(`../../assets/images/${image320}.jpg`)}
        alt={alt}
        sizes={sizes}
        className={cssName}
      />
    </picture>
  );
};

ResponsiveImage.propTypes = {
  isLazy: PropTypes.oneOf(['lazy']),
  image320: PropTypes.string.isRequired,
  image640: PropTypes.string.isRequired,
  image960: PropTypes.string.isRequired,
  image1280: PropTypes.string.isRequired,
  sizes: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  cssName: PropTypes.string,
};

ResponsiveImage.defaultProps = {
  isLazy: null,
  cssName: null,
};

export default ResponsiveImage;
