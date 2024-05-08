import PropTypes from 'prop-types';

import css from './Slider.module.css';

export default function Slider(props) {
  const { children } = props;
  const { slider, list } = css;

  return (
    <div className={slider}>
      <ul className={list}>{children}</ul>
    </div>
  );
}

Slider.propTypes = {
  children: PropTypes.node.isRequired,
};
