import PropTypes from 'prop-types';

import css from './Container.module.css';

const Container = props => {
  const { variant, children } = props;
  const { container } = css;

  const variation = variant ? `${css[variant]}` : '';

  return (
    <div role="presentation" className={`${container} ${variation}`}>
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
