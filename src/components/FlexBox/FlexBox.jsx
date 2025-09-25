import PropTypes from 'prop-types';

import styles from './styles.module.css';

const FlexBox = props => {
  const { direction, align, wrapped = true, children } = props;

  const alignItems = align ? `${styles[align]}` : '';
  const directionItems = direction ? `${styles[direction]}` : '';
  const isWrapped = wrapped ? `${styles.wrapped}` : '';

  return (
    <div
      className={`${styles.flexed} ${directionItems} ${alignItems} ${isWrapped}`}
    >
      {children}
    </div>
  );
};

FlexBox.propTypes = {
  direction: PropTypes.oneOf(['row-reverse', 'column', 'column-reverse']),
  align: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'baseline']),
  wrapped: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

FlexBox.defaultProps = {
  direction: null,
  align: null,
  wrapped: true,
};

export default FlexBox;
