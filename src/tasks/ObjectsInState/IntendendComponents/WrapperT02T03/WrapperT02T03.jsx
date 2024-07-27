import PropTypes from 'prop-types';

import styles from './styles.module.css';

const WrapperT02T03 = props => {
  const { children, ...delegated } = props;

  return (
    <div className={styles.wrapper} {...delegated}>
      {children}
    </div>
  );
};

WrapperT02T03.propTypes = {
  children: PropTypes.any.isRequired,
  delegated: PropTypes.any,
};

WrapperT02T03.defaultProps = {
  delegated: null,
};

export default WrapperT02T03;
