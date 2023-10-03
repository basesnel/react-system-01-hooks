import PropTypes from 'prop-types';

import css from './FlexBox.module.css';

export default function FlexBox({ children }) {
  return <section className={css.FlexBox}>{children}</section>;
}

FlexBox.propTypes = {
  children: PropTypes.node.isRequired,
};
