import PropTypes from 'prop-types';

import styles from './styles.module.css';

const FlexBox = props => {
  const { direction, align, children } = props;

  const alignItems = align ? `${styles[align]}` : '';
  const directionItems = direction ? `${styles[direction]}` : '';

  return (
    <div className={`${styles.flexBox} ${directionItems} ${alignItems}`}>
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
