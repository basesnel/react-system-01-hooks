import PropTypes from 'prop-types';

import css from './Form.module.css';

const Form = props => {
  const { onSubmit, children } = props;
  const { form } = css;

  return (
    <form className={form} onSubmit={onSubmit} autoComplete="off">
      {children}
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Form;
