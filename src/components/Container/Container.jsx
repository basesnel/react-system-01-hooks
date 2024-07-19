import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Container = props => {
  const { variant, children } = props;

  const variation = variant ? `${styles[variant]}` : '';

  return (
    <div role="presentation" className={`${styles.container} ${variation}`}>
      {children}
    </div>
  );
};

Container.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  variant: null,
};

export default Container;
