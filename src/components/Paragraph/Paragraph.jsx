import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Paragraph = props => {
  const { centered, warned, succeeded, paragraphRef, children } = props;

  const styledText = () => {
    if (centered && succeeded) {
      return `${styles.text} ${styles.centeredText} ${styles.greenText}`;
    }

    if (centered && warned) {
      return `${styles.text} ${styles.centeredText} ${styles.redText}`;
    }

    if (centered) {
      return `${styles.text} ${styles.centeredText}`;
    }

    if (warned) {
      return `${styles.text} ${styles.redText}`;
    }

    return `${styles.text}`;
  };

  return (
    <p className={styledText()} ref={paragraphRef}>
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  centered: PropTypes.bool,
  warned: PropTypes.bool,
  paragraphRef: PropTypes.any,
  children: PropTypes.node.isRequired,
};

Paragraph.defaultProps = {
  centered: null,
  warned: null,
  paragraphRef: null,
};

export default Paragraph;
