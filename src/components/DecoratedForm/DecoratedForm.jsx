import PropTypes from 'prop-types';

import css from './DecoratedForm.module.css';

export default function DecoratedForm({ children, onSubmit }) {
  return (
    <form className={css.form} onSubmit={onSubmit} autoComplete="off">
      {children}
    </form>
  );
}

DecoratedForm.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
