import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Span = props => {
  const { centered, children } = props;

  return (
    <span
      className={
        centered ? `${styles.text} ${styles.centeredText}` : styles.text
      }
    >
      {children}
    </span>
  );
};

Span.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Span.defaultProps = {
  centered: null,
};

export default Span;
