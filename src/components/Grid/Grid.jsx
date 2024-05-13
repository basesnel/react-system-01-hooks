import PropTypes from 'prop-types';

import css from './Grid.module.css';

const Grid = props => {
  const { children } = props;
  const { grid } = css;

  return <section className={grid}>{children}</section>;
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
