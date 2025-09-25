import PropTypes from 'prop-types';

import styles from './styles.module.css';

const FlexBox = props => {
  const { direction, align, wrapped, children } = props;

  const alignItems = align ? `${styles[align]}` : '';
  const directionItems = direction ? `${styles[direction]}` : '';
  const wrapItems = wrapped ? `${styles[wrapped]}` : '';

  return (
    <div
      className={`${styles.flexed} ${directionItems} ${alignItems} ${wrapItems}`}
    >
      {children}
    </div>
  );
};

FlexBox.propTypes = {
  direction: PropTypes.oneOf(['row-reverse', 'column', 'column-reverse']),
  align: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'baseline']),
  wrapped: PropTypes.oneOf(['wrap', 'nowrap', 'wrap-reverse']),
  children: PropTypes.node.isRequired,
};

FlexBox.defaultProps = {
  direction: null,
  align: null,
  wrapped: null,
};

export default FlexBox;
