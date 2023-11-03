import PropTypes from 'prop-types';

import css from './Container.module.css';

export default function Container({ variant = null, children }) {
  const variation = variant ? `${css[variant]}` : '';
  return (
    <div role="presentation" className={`${css.container} ${variation}`}>
      {children}
    </div>
  );
}

Container.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};
