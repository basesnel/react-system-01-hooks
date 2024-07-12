import PropTypes from 'prop-types';

import css from './FlexBox.module.css';

const FlexBox = props => {
  const { direction, align, children } = props;
  const { flexBox } = css;

  const alignItems = align ? `${css[align]}` : '';
  const directionItems = direction ? `${css[direction]}` : '';

  return (
    <div className={`${flexBox} ${directionItems} ${alignItems}`}>
      {children}
    </div>
  );
};

FlexBox.propTypes = {
  direction: PropTypes.oneOf(['row-reverse', 'column', 'column-reverse']),
  align: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'baseline']),
  children: PropTypes.node.isRequired,
};

FlexBox.defaultProps = {
  direction: null,
  align: null,
};

export default FlexBox;
