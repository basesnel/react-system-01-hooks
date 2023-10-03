import PropTypes from 'prop-types';

import css from './Grid.module.css';

export default function Grid({ children }) {
  return <section className={css.grid}>{children}</section>;
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};
