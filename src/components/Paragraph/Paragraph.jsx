import PropTypes from 'prop-types';

import css from './Paragraph.module.css';

export default function Paragraph({ children, centered }) {
  return (
    <p className={centered ? `${css.txt} ${css.centered}` : css.txt}>
      {children}
    </p>
  );
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  centered: PropTypes.bool,
};
