import PropTypes from 'prop-types';

import css from './Title.module.css';

export default function Title(props) {
  const { level, caption } = props;
  const { title01, title02, title03 } = css;

  switch (level) {
    case 1:
      return <h1 className={title01}>{caption}</h1>;

    case 2:
      return <h2 className={title02}>{caption}</h2>;

    case 3:
      return <h3 className={title03}>{caption}</h3>;

    default:
      return null;
  }
}

Title.propTypes = {
  level: PropTypes.number.isRequired,
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
