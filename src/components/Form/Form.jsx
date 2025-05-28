import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Form = props => {
  const { onSubmit, id, children } = props;

  return (
    <form
      id={id}
      className={styles.form}
      onSubmit={onSubmit}
      autoComplete="off"
    >
      {children}
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Form.defaultProps = {
  id: null,
};

export default Form;
