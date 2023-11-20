import PropTypes from 'prop-types';

import css from './Slider.module.css';

export default function Slider({ children }) {
  return (
    <div className={css.slider}>
      <ul className={css.list}>{children}</ul>
    </div>
  );
}

Slider.propTypes = {
  children: PropTypes.node.isRequired,
};
