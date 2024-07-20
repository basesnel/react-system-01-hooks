import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Slider = props => {
  const { children } = props;

  return (
    <div className={styles.slider}>
      <ul className={styles.list}>{children}</ul>
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Slider;
