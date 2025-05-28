import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Span = props => {
  const { id, centered, weighted, children } = props;

  const styledText = () => {
    // if (centered && succeeded) {
    //   return `${styles.text} ${styles.centeredText} ${styles.greenText}`;
    // }

    if (centered && weighted) {
      return `${styles.text} ${styles.centeredText} ${styles.weightedText}`;
    }

    if (centered) {
      return `${styles.text} ${styles.centeredText}`;
    }

    if (weighted) {
      return `${styles.text} ${styles.weightedText}`;
    }

    return `${styles.text}`;
  };

  return (
    <span id={id} className={styledText()}>
      {children}
    </span>
  );
};

Span.propTypes = {
  id: PropTypes.string,
  centered: PropTypes.bool,
  weighted: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Span.defaultProps = {
  id: null,
  centered: null,
  weighted: null,
};

export default Span;
