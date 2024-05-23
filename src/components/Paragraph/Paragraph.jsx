import PropTypes from 'prop-types';

import css from './Paragraph.module.css';

const Paragraph = props => {
  const { centered, paragraphRef, children } = props;
  const { text, centeredText } = css;

  return (
    <p
      className={centered ? `${text} ${centeredText}` : text}
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
