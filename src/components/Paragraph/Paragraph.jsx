import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Paragraph = props => {
  const { id, centered, warned, succeeded, paragraphRef, children } = props;

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
    <p id={id} className={styledText()} ref={paragraphRef}>
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  id: PropTypes.string,
  centered: PropTypes.bool,
  warned: PropTypes.bool,
  succeeded: PropTypes.bool,
  paragraphRef: PropTypes.any,
  children: PropTypes.node.isRequired,
};

Paragraph.defaultProps = {
  id: null,
  centered: null,
  warned: null,
  succeeded: null,
  paragraphRef: null,
};

export default Paragraph;
