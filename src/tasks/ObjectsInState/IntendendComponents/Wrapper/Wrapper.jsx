import PropTypes from 'prop-types';

import css from './Wrapper.module.css';

const Wrapper = props => {
  const { children, ...delegated } = props;
  const { wrapper } = css;

  return (
    <div className={wrapper} {...delegated}>
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.any.isRequired,
  delegated: PropTypes.any,
};

Wrapper.defaultProps = {
  delegated: null,
};

export default Wrapper;
