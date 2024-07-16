import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Box = props => {
  const { children } = props;

  return <section className={styles.box}>{children}</section>;
};

Box.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Box;
