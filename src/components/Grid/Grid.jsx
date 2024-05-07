import PropTypes from 'prop-types';

import css from './Grid.module.css';

export default function Grid(props) {
  const { children } = props;
  const { grid } = css;

  return <section className={grid}>{children}</section>;
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};
