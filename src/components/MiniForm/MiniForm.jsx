import PropTypes from 'prop-types';

import { useState } from 'react';
import { toast } from 'react-toastify';

import css from './MiniForm.module.css';

export default function MiniForm(props) {
  const { onFormSubmit, filling, icon } = props;
  const { miniform, miniformButton, miniformInput } = css;

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
    <form className={miniform} onSubmit={handleSubmit} autoComplete="off">
      <input
        type="text"
        name="field"
        placeholder={filling}
        value={field}
        onChange={handleInputChange}
        className={miniformInput}
      />
      <button className={miniformButton}>{icon}</button>
    </form>
  );
}

MiniForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  filling: PropTypes.string,
  icon: PropTypes.node.isRequired,
};

MiniForm.defaultProps = {
  filling: null,
};