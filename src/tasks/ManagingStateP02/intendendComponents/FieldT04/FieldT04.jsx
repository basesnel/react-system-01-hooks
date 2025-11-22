import { useState } from 'react';
import PropTypes from 'prop-types';
import { Linput } from 'components';

const FieldT04 = ({ label, name }) => {
  const [text, setText] = useState('');
  return (
    <Linput
      label={label}
      name={name}
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
};

FieldT04.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FieldT04;
