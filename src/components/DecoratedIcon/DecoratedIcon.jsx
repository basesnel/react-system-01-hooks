import PropTypes from 'prop-types';

import css from './DecoratedIcon.module.css';

export default function DecoratedIcon({ children }) {
  return <>{children}</>;
}

DecoratedForm.propTypes = {
  children: PropTypes.node.isRequired,
};
