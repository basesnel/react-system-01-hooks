import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Paragraph = props => {
  const { centered, paragraphRef, children } = props;

  return (
    <p
      className={
        centered ? `${styles.text} ${styles.centeredText}` : styles.text
      }
      ref={paragraphRef}
    >
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  centered: PropTypes.bool,
  paragraphRef: PropTypes.any,
  children: PropTypes.node.isRequired,
};

Paragraph.defaultProps = {
  centered: null,
  paragraphRef: null,
};

export default Paragraph;
