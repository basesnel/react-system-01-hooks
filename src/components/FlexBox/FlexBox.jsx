import PropTypes from 'prop-types';

import css from './FlexBox.module.css';

export default function FlexBox({ children, align }) {
  const alignItems = align ? `${css[align]}` : '';

  return <div className={`${css.flexBox} ${alignItems}`}>{children}</div>;
}

FlexBox.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'baseline']),
};

FlexBox.defaultProps = {
  align: null,
};
