import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Span = props => {
  const { id, weighted, color, children } = props;

  const styledText = () => {
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
  weighted: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Span.defaultProps = {
  id: null,
  weighted: null,
  color: null,
};

export default Span;
