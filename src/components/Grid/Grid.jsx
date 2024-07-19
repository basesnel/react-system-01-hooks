import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Grid = props => {
  const { children } = props;

  return <section className={styles.grid}>{children}</section>;
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
