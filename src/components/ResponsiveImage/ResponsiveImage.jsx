import PropTypes from 'prop-types';

// import css from './ResponsiveImage.module.css';

export default function ResponsiveImage({
  id,
  image320,
  image640,
  image960,
  image1280,
}) {
  return (
    <picture>
      <source
        srcSet={`
                ${require(`../../assets/images/kittens/${image320}.webp`)}   320w,
                ${require(`../../assets/images/kittens/${image640}.webp`)}   640w,
                ${require(`../../assets/images/kittens/${image960}.webp`)}   960w,
                ${require(`../../assets/images/kittens/${image1280}.webp`)} 1280w
              `}
        type="image/webp"
        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
      />
      <img
        loading="lazy"
        srcSet={`
                ${require(`../../assets/images/kittens/${image320}.jpg`)}   320w,
                ${require(`../../assets/images/kittens/${image640}.jpg`)}  640w,
                ${require(`../../assets/images/kittens/${image960}.jpg`)}   960w,
                ${require(`../../assets/images/kittens/${image1280}.jpg`)} 1280w
              `}
        src={require(`../../assets/images/kittens/${image320}.jpg`)}
        alt={`Kittens ${id < 9 ? `0${id + 1}` : `${id + 1}`}`}
        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
      />
    </picture>
  );
}

ResponsiveImage.propTypes = {
  id: PropTypes.number.isRequired,
  image320: PropTypes.string.isRequired,
  image640: PropTypes.string.isRequired,
  image960: PropTypes.string.isRequired,
  image1280: PropTypes.string.isRequired,
};
