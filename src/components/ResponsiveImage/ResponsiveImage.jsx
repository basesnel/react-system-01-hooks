import PropTypes from 'prop-types';

export default function ResponsiveImage({
  image320,
  image640,
  image960,
  image1280,
  alt,
}) {
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
        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
      />
      <img
        loading="lazy"
        srcSet={`
                ${require(`../../assets/images/${image320}.jpg`)}   320w,
                ${require(`../../assets/images/${image640}.jpg`)}  640w,
                ${require(`../../assets/images/${image960}.jpg`)}   960w,
                ${require(`../../assets/images/${image1280}.jpg`)} 1280w
              `}
        src={require(`../../assets/images/${image320}.jpg`)}
        alt={alt}
        // alt={`Kittens ${id < 9 ? `0${id + 1}` : `${id + 1}`}`}
        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
      />
    </picture>
  );
}

ResponsiveImage.propTypes = {
  image320: PropTypes.string.isRequired,
  image640: PropTypes.string.isRequired,
  image960: PropTypes.string.isRequired,
  image1280: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
