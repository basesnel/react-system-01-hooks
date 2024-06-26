import PropTypes from 'prop-types';

import css from './Box.module.css';

const Box = props => {
  const { children } = props;
  const { box } = css;

  return <section className={box}>{children}</section>;
};

Box.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Box;
