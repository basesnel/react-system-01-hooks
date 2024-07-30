import { useState } from 'react';

import PropTypes from 'prop-types';

import { toast } from 'react-toastify';

import styles from './styles.module.css';

const MiniForm = props => {
  const { onFormSubmit, filling, icon } = props;

  const [field, setField] = useState('');

  const handleInputChange = event => {
    setField(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (field.trim() === '') {
      return toast.warning('Please, input element name!');
    }

    onFormSubmit(field);
    setField('');
  };

  return (
    <form
      className={styles.miniform}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <input
        type="text"
        name="field"
        placeholder={filling}
        value={field}
        onChange={handleInputChange}
        className={styles.input}
      />
      <button className={styles.button}>{icon}</button>
    </form>
  );
};

MiniForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  filling: PropTypes.string,
  icon: PropTypes.node.isRequired,
};

MiniForm.defaultProps = {
  filling: null,
};

export default MiniForm;
