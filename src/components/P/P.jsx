import PropTypes from 'prop-types';

import styles from './styles.module.css';

const P = props => {
  const { id, centered, warned, succeeded, paragraphRef, children } = props;
  const {
    text,
    warnText,
    successText,
    centeredText,
    warnCenteredText,
    successCenteredText,
  } = styles;

  const styledText = () => {
    if (centered && succeeded) {
      return successCenteredText;
    }

    if (centered && warned) {
      return warnCenteredText;
    }

    if (centered) {
      return centeredText;
    }

    if (succeeded) {
      return successText;
    }

    if (warned) {
      return warnText;
    }

    return text;
  };

  return (
    <p id={id} className={styledText()} ref={paragraphRef}>
      {children}
    </p>
  );
};

P.propTypes = {
  id: PropTypes.string,
  centered: PropTypes.bool,
  warned: PropTypes.bool,
  succeeded: PropTypes.bool,
  paragraphRef: PropTypes.any,
  children: PropTypes.node.isRequired,
};

P.defaultProps = {
  id: null,
  centered: null,
  warned: null,
  succeeded: null,
  paragraphRef: null,
};

export default P;
