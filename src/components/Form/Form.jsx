import PropTypes from 'prop-types';

import css from './Form.module.css';

export default function Form({ children, onSubmit }) {
  return (
    <form className={css.form} onSubmit={onSubmit} autoComplete="off">
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
