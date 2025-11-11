import { useState } from 'react';
import PropTypes from 'prop-types';
import { CheckBox, Linput } from 'components';

const Task04 = () => {
  const [reverse, setReverse] = useState(false);

  if (reverse) {
    return (
      <>
        <Field key="lname" label="Last name" name="task04lname" />
        <Field key="fname" label="First name" name="task04fname" />
        <CheckBox
          name="task04check"
          checked={reverse}
          onChange={e => setReverse(e.target.checked)}
          label="Reverse order"
        />
      </>
    );
  } else {
    return (
      <>
        <Field key="fname" label="First name" name="task04fname" />
        <Field key="lname" label="Last name" name="task04lname" />
        <CheckBox
          name="task04check"
          checked={reverse}
          onChange={e => setReverse(e.target.checked)}
          label="Reverse order"
        />
      </>
    );
  }
};

const Field = ({ label, name }) => {
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

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Task04;
