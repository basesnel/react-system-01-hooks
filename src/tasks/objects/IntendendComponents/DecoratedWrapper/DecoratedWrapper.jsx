import PropTypes from 'prop-types';

import css from './DecoratedWrapper.module.css';

export default function DecoratedWrapper({ children, ...delegated }) {
  return (
    <div className={css['decorated-wrapper']} {...delegated}>
      {children}
    </div>
  );
}

DecoratedWrapper.propTypes = {
  children: PropTypes.any.isRequired,
};
