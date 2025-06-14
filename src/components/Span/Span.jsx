import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Span = props => {
  const { id, centered, weighted, color, children } = props;

  const styledText = () => {
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
    <span id={id} className={styledText()} style={{ color: color }}>
      {children}
    </span>
  );
};

Span.propTypes = {
  id: PropTypes.string,
  centered: PropTypes.bool,
  weighted: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Span.defaultProps = {
  id: null,
  centered: null,
  weighted: null,
  color: null,
};

export default Span;
