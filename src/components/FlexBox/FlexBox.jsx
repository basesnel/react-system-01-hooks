import PropTypes from 'prop-types';

import css from './FlexBox.module.css';

const FlexBox = props => {
  const { align, children } = props;
  const { flexBox } = css;
  const alignItems = align ? `${css[align]}` : '';

  return <div className={`${flexBox} ${alignItems}`}>{children}</div>;
};

FlexBox.propTypes = {
  align: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'baseline']),
  children: PropTypes.node.isRequired,
};

FlexBox.defaultProps = {
  align: null,
};

export default FlexBox;
