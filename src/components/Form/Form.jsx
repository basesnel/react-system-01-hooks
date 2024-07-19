import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Form = props => {
  const { onSubmit, children } = props;

  return (
    <form className={styles.form} onSubmit={onSubmit} autoComplete="off">
      {children}
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Form;
